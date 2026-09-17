import type { LoginUser, SignUpUser } from "../types/authTypes";
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

export function signupRequest({
    username,
    email,
    phone,
    password,
}: SignUpUser) {
    return apiRequest<SignupResponse>("/signup", {
        method: "POST",
        body: { username, email, phone, password },
    });
}

export function loginRequest({ username, phone, password }: LoginUser) {
    return apiRequest<LoginResponse>("/login", {
        method: "POST",
        body: { username, phone, password },
    });
}

export function getCurrentUserRequest(token: string) {
    return apiRequest<AuthUser>("/user", { token });
}
