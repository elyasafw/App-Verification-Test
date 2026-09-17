import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import SelectField from "../components/SelectField";
import { useAuthContext } from "../context/AuthContext";
import type { MaritalStatus } from "../types/authTypes";

const STATUS_OPTIONS = [
    { value: "single", label: "רווק/ה" },
    { value: "married", label: "נשוי/אה" },
    { value: "divorced", label: "גרוש/ה" },
];

const SignUpPage = () => {
    const { signup, login } = useAuthContext();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        setError("");

        try {
            await signup({
                firstName,
                lastName,
                email,
                phone,
                password,
                city,
                address,
                age: Number(age),
                maritalStatus: maritalStatus as MaritalStatus,
                birthDate,
            });
            await login({ phone, password });
            navigate("/profile");
        } catch (err) {
            setError(err instanceof Error ? err.message : "הרשמה נכשלה ...");
        }
    };

    return (
        <div>
            <h1>הרשמה</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="שם פרטי"
                    type="text"
                    value={firstName}
                    onChange={setFirstName}
                    minLength={2}
                    maxLength={20}
                />
                <FormField
                    label="שם משפחה"
                    type="text"
                    value={lastName}
                    onChange={setLastName}
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
                    min="10"
                />
                <FormField
                    label="סיסמה"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    minLength={8}
                    maxLength={14}
                />
                <FormField
                    label="עיר"
                    type="text"
                    value={city}
                    onChange={setCity}
                />
                <FormField
                    label="כתובת"
                    type="text"
                    value={address}
                    onChange={setAddress}
                />
                <FormField
                    label="גיל"
                    type="number"
                    value={age}
                    onChange={setAge}
                />
                <FormField
                    label="תאריך לידה"
                    type="date"
                    value={birthDate}
                    onChange={setBirthDate}
                />
                <SelectField
                    label="מצב משפחתי"
                    value={maritalStatus}
                    onChange={setMaritalStatus}
                    options={STATUS_OPTIONS}
                />
                {error && <p>{error}</p>}
                <button type="submit">הרשם</button>
            </form>
        </div>
    );
};

export default SignUpPage;
