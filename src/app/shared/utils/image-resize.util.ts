/**
 * Downscales/compresses an image client-side via canvas before upload — keeps
 * phone-camera photos (often 8-12 MB) well under upload/API size limits.
 * Falls back to the original file if the image fails to decode.
 *
 * Decoding is the expensive half, and on a phone it happens on the main
 * thread: a 12 MP JPEG through `new Image()` freezes the UI long enough that
 * any spinner next to it stops animating. `createImageBitmap` hands the decode
 * to the browser's own worker, so the busy state stays alive while it runs —
 * hence it's tried first, with the `Image` path kept as the fallback for
 * WebViews that don't have it.
 */
export function resizeImage(file: File, maxDimension: number, quality: number): Promise<File> {
    return decodeViaBitmap(file)
        .catch(() => decodeViaImage(file))
        .then(source => encode(source, file, maxDimension, quality))
        .catch(() => file);
}

/** Reads a (already resized) file into a `data:` URL for use as an <img> src. */
export function readAsDataUrl(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

type DecodedImage = ImageBitmap | HTMLImageElement;

function decodeViaBitmap(file: File): Promise<ImageBitmap> {
    if (typeof createImageBitmap !== 'function') {
        return Promise.reject(new Error('createImageBitmap unavailable'));
    }
    return createImageBitmap(file);
}

function decodeViaImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(url);
            resolve(img);
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('decode failed'));
        };
        img.src = url;
    });
}

function encode(source: DecodedImage, original: File, maxDimension: number, quality: number): Promise<File> {
    const width = source.width;
    const height = source.height;
    const scale = Math.min(1, maxDimension / Math.max(width, height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.getContext('2d')!.drawImage(source, 0, 0, canvas.width, canvas.height);
    if (typeof ImageBitmap !== 'undefined' && source instanceof ImageBitmap) {
        source.close();
    }

    return new Promise(resolve => {
        canvas.toBlob(
            blob => resolve(blob ? new File([blob], original.name, { type: 'image/jpeg' }) : original),
            'image/jpeg',
            quality,
        );
    });
}
