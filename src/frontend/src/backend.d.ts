import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    name: string;
    requirement: string;
    timestamp: Time;
    phone: string;
    location: string;
}
export type Time = bigint;
export interface backendInterface {
    listInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, phone: string, location: string, requirement: string): Promise<void>;
}
