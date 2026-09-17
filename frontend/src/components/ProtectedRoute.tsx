import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { token, user, loading } = useAuthContext();

    if (loading) return null;

    if (!token || !user) return <Navigate to="/" replace />;

    return children;
};

export default ProtectedRoute;
