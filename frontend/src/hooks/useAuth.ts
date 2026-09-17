import { useCallback, useEffect, useState } from "react";
import {
    getCurrentUserRequest,
    loginRequest,
    signupRequest,
    type AuthUser,
} from "../api/authApi";
import type { LoginUser, SignUpUser } from "../types/authTypes";

const TOKEN_KEY = "token";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem(TOKEN_KEY),
    );
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            setLoading(false);
            return;
        }

        getCurrentUserRequest(token)
            .then(setUser)
            .catch(() => {
                localStorage.removeItem(TOKEN_KEY);
                setToken(null);
                setUser(null);
            })
            .finally(() => setLoading(false));
    }, [token]);

    const signup = useCallback(async (newUser: SignUpUser) => {
        await signupRequest(newUser);
    }, []);

    const login = useCallback(async (credentials: LoginUser) => {
        const res = await loginRequest(credentials);
        localStorage.setItem(TOKEN_KEY, res.token);
        setToken(res.token);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
    }, []);

    return { token, user, loading, login, signup, logout };
};
