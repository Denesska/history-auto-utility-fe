/**
 * Downscales/compresses an image client-side via canvas before upload — keeps
 * phone-camera photos (often 8-12 MB) well under upload/API size limits.
 * Falls back to the original file if the image fails to decode.
 */
export function resizeImage(file: File, maxDimension: number, quality: number): Promise<File> {
    return new Promise(resolve => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(url);
            const { width, height } = img;
            const scale = Math.min(1, maxDimension / Math.max(width, height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(width * scale);
            canvas.height = Math.round(height * scale);
            canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(blob => {
                resolve(blob ? new File([blob], file.name, { type: 'image/jpeg' }) : file);
            }, 'image/jpeg', quality);
        };
        img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
        img.src = url;
    });
}
