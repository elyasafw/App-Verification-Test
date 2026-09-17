import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        setError("");

        try {
            await login({ username, phone, password });
            navigate("/profile");
        } catch (err) {
            setError(err instanceof Error ? err.message : "login failed");
        }
    };

    return (
        <div>
            <h1>התחברות</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="שם משתמש"
                    type="text"
                    value={username}
                    onChange={setUsername}
                />
                <FormField
                    label="טלפון"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                />
                <FormField
                    label="סיסמה"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
                {error && <p>{error}</p>}
                <button type="submit">התחבר</button>
            </form>
        </div>
    );
};

export default LoginPage;
