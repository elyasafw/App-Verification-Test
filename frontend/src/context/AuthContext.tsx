import { createContext, useContext, type ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

type AuthContextValue = ReturnType<typeof useAuth>;

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("Internal usage error in: useAuthContext");
    }

    return context;
};
