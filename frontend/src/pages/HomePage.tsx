import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to="/login">התחברות</Link>
            <Link to="/signup">הרשמה</Link>
        </div>
    );
};

export default HomePage;
