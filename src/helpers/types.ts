export interface apiOptions {
    method: string,
    url: string,
    data?: any,
}

export interface registerType {
    email: string | null,
    password: string | null,
    name: string | null,
}
