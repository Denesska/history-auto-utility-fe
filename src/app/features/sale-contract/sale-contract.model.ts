/**
 * Shapes for the sale-contract API (`/api/sale-contract`).
 *
 * These are hand-written rather than taken from `@hau/autogenapi`: regenerating
 * the client from the current `api-backend.yaml` deletes models that committed
 * app code still imports, so the generated client and the spec have drifted.
 * Untangling that is its own job — this feature stays out of it and talks to the
 * backend through a plain HttpClient service, exactly as `DocumentFileService`
 * already does.
 *
 * Field names match the backend one for one, and through it the blanks on the
 * paper form (ITL 054, Anexa nr. 2). Don't rename them on the way in.
 */

export type SaleContractRole = 'SELLER' | 'BUYER';
export type SaleContractStatus = 'DRAFT' | 'GENERATED' | 'PURGED';
export type ExtractionConfidence = 'high' | 'medium' | 'low';

/** One address, broken down the way the form's blanks are. */
export interface ContractAddress {
    /** Left empty for Romania — the form reads "în ROMÂNIA/ ......". */
    country?: string;
    county?: string;
    postal_code?: string;
    /** municipiul/oraşul/comuna */
    city?: string;
    /** satul/sectorul */
    village_or_sector?: string;
    street?: string;
    street_number?: string;
    building?: string;
    staircase?: string;
    floor?: string;
    apartment?: string;
}

export interface ContractRepresentative {
    full_name?: string;
    id_series?: string;
    id_number?: string;
    cif?: string;
    phone?: string;
    email?: string;
}

/** Section (1) or (2) of the form. Personal data — never log it, never cache it
 *  outside the store, and never send it anywhere but this API. */
export interface ContractParty {
    is_company: boolean;
    full_name?: string;
    address?: ContractAddress;
    /** B.I./C.I./C.I.P./Paşaport */
    id_series?: string;
    id_number?: string;
    /** CNP for a person, CIF for a company — the form shares one blank. */
    cnp_or_cif?: string;
    phone?: string;
    email?: string;
    fiscal_address?: ContractAddress;
    representative?: ContractRepresentative;
    /** "în calitate de ..." */
    capacity?: string;
}

/** Section (3), "obiectul contractului". */
export interface ContractVehicle {
    make?: string;
    type?: string;
    /** "număr de identificare" — the VIN. */
    vin?: string;
    engine_series?: string;
    engine_capacity_cm3?: number;
    max_weight_tons?: number;
    license_plate?: string;
    itp_expiry_date?: string;
    /** "numărul cărţii de identitate a vehiculului" (CIV). */
    civ_number?: string;
    manufacture_year?: number;
    euro_norm?: string;
    acquired_date?: string;
    acquired_document?: string;
}

/** List row. Carries no personal data by design — listing never decrypts. */
export interface SaleContractSummary {
    id: number;
    role: SaleContractRole;
    car_id: number | null;
    vehicle_make: string | null;
    license_plate: string | null;
    price_lei: number | null;
    signing_date: string | null;
    status: SaleContractStatus;
    pdf_generated_at: string | null;
    retention_until: string;
    /** False once the retention job has erased the parties' details. */
    has_personal_data: boolean;
    created_at: string;
}

export interface SaleContract extends SaleContractSummary {
    seller: ContractParty | null;
    buyer: ContractParty | null;
    vehicle: ContractVehicle;
    price_in_words: string | null;
    signing_place: string | null;
    has_annexes: boolean;
    confirmations: Record<string, unknown> | null;
    consent_accepted_at: string | null;
}

export interface CreateSaleContractPayload {
    role: SaleContractRole;
    car_id?: number;
    seller: ContractParty;
    buyer: ContractParty;
    vehicle: ContractVehicle;
    price_lei?: number;
    signing_date?: string;
    signing_place?: string;
    has_annexes?: boolean;
    /** Required as soon as any identity data for the other party is supplied. */
    consent_version?: string;
    keep_in_history?: boolean;
}

export type UpdateSaleContractPayload = Partial<CreateSaleContractPayload>;

/**
 * The checkpoint before a PDF is produced. Every flag has to be true or the API
 * rejects the request — that is deliberate, so don't default any of them to true
 * in a form. None of them appears on the PDF: the declarations themselves are
 * already printed at section (5) of the official form. What these record is that
 * the user was shown them and confirmed the data behind them.
 */
export interface SaleContractConfirmations {
    data_verified: boolean;
    declarations_accepted: boolean;
    criminal_code_acknowledged: boolean;
    disclaimer_acknowledged: boolean;
}

export interface GenerateSaleContractPayload {
    confirmations: SaleContractConfirmations;
    /** One page by default; the user multiplies it at the printer. */
    copies?: number;
    keep_in_history?: boolean;
}

export interface SaleContractFileLink {
    url: string;
    file_name: string;
    expires_in: number;
}

export interface IdentityDocumentFields {
    last_name?: string;
    first_name?: string;
    full_name?: string;
    cnp?: string;
    id_series?: string;
    id_number?: string;
    address?: ContractAddress;
    issued_by?: string;
    issue_date?: string;
    valid_until?: string;
    nationality?: string;
    place_of_birth?: string;
}

/**
 * Suggestions only — nothing is stored by the endpoint that returns this, and
 * the photo never leaves memory on the server. Treat `warnings` as required
 * reading for the user, not decoration: a CNP that fails its checksum arrives
 * here with the value kept and a warning attached, because a single misread
 * digit produces a contract that is invalid at the counter while looking
 * perfectly fine on screen.
 */
export interface IdentityExtractionResult {
    detected: boolean;
    confidence: ExtractionConfidence;
    fields: IdentityDocumentFields;
    warnings: string[];
    provider: string;
}

export interface UserIdentity {
    identity: ContractParty | null;
    updated_at: string | null;
}
