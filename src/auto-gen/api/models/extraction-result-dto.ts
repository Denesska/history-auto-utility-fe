/* eslint-disable */
export interface ExtractedFieldsDto {
    policy_series?: string;
    policy_number?: string;
    insurer_name?: string;
    broker_name?: string;
    policyholder_name?: string;
    owner_name?: string;
    owner_cnp?: string;
    plate_number?: string;
    vin?: string;
    vehicle_make?: string;
    vehicle_model?: string;
    vehicle_category?: string;
    engine_capacity?: string;
    power?: string;
    seats?: string;
    max_weight?: string;
    valid_from?: string;
    valid_until?: string;
    issue_date?: string;
    premium?: string;
    currency?: string;
    bonus_malus_class?: string;
    direct_settlement?: boolean;
    direct_settlement_price?: string;
    payment_installments?: string;
    damage_limits?: string;
}

export interface ExtractionResultDto {
    detected: boolean;
    document_type?: string;
    confidence: 'high' | 'medium' | 'low' | 'none';
    fields: ExtractedFieldsDto;
    warnings: string[];
    raw_text?: string;
}
