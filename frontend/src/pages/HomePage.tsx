import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const HomePage = () => {
    const { token, user, loading } = useAuthContext();

    if (loading) return null;

    if (token && user) return <Navigate to="/profile" replace />;

    return (
        <div>
            <h1>אפליקציית אימות משתמשים</h1>
            <div className="home-links">
                <Link to="/login">התחברות</Link>
                <Link to="/signup">הרשמה</Link>
            </div>
        </div>
    );
};

export default HomePage;
