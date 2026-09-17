import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { useAuthContext } from "../context/AuthContext";

const SignUpPage = () => {
    const { signup, login } = useAuthContext();
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        setError("");

        try {
            await signup({ username, email, phone, password });
            await login({ username, phone, password });
            navigate("/profile");
        } catch (err) {
            setError(err instanceof Error ? err.message : "signup failed");
        }
    };

    return (
        <div>
            <h1>הרשמה</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="שם משתמש"
                    type="text"
                    value={username}
                    onChange={setUsername}
                    minLength={2}
                    maxLength={20}
                />
                <FormField
                    label="אימייל"
                    type="email"
                    value={email}
                    onChange={setEmail}
                />
                <FormField
                    label="טלפון"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    minLength={10}
                />
                <FormField
                    label="סיסמה"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    minLength={8}
                    maxLength={14}
                />
                {error && <p>{error}</p>}
                <button type="submit">הרשם</button>
            </form>
        </div>
    );
};

export default SignUpPage;
