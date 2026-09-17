import type { AxiosError } from "axios";
import api from "./apiConfig";

interface RequestOptions {
    method?: string;
    body?: unknown;
    token?: string | null;
}

export async function apiRequest<T>(
    path: string,
    { method = "GET", body, token }: RequestOptions = {},
): Promise<T> {
    try {
        const res = await api.request<T>({
            url: path,
            method,
            data: body,
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        });

        return res.data;
    } catch (error) {
        const axiosErr = error as AxiosError<{ error: string }>;
        throw new Error(axiosErr.response?.data?.error || "הבקשה נכשלה ...");
    }
}
