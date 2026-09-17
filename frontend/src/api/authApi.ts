import type { LoginUser, MaritalStatus, SignUpUser } from "../types/authTypes";
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
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    age: number;
    maritalStatus: MaritalStatus;
    birthDate: string;
}

export function signupRequest(newUser: SignUpUser) {
    return apiRequest<SignupResponse>("/signup", {
        method: "POST",
        body: newUser,
    });
}

export function loginRequest(credentials: LoginUser) {
    return apiRequest<LoginResponse>("/login", {
        method: "POST",
        body: credentials,
    });
}

export function getCurrentUserRequest(token: string) {
    return apiRequest<AuthUser>("/user", { token });
}
