import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useAuthContext } from "../context/AuthContext";

const ProfilePage = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!user) return null;

    return (
        <div>
            <UserProfile user={user} />
            <button onClick={handleLogout}>התנתק</button>
        </div>
    );
};

export default ProfilePage;
