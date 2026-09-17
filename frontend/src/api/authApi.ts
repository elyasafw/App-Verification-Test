import { apiRequest } from "./client";

interface SignupResponse {
    mesage: string;
}

interface LoginResponse {
    message: string;
    token: string;
}

export interface AuthUser {
    id: number;
    username: string;
    email: string;
    phone: string;
}

export function signupRequest(
    username: string,
    email: string,
    phone: string,
    password: string,
) {
    return apiRequest<SignupResponse>("/signup", {
        method: "POST",
        body: { username, email, phone, password },
    });
}

export function loginRequest(
    username: string,
    phone: string,
    password: string,
) {
    return apiRequest<LoginResponse>("/login", {
        method: "POST",
        body: { username, phone, password },
    });
}

export function getCurrentUserRequest(token: string) {
    return apiRequest<AuthUser>("/user", { token });
}
