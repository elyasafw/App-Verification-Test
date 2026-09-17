import type { AuthUser } from "../api/authApi";

const MARITAL_STATUS_LABELS = {
  single: "רווק/ה",
  married: "נשוי/אה",
  divorced: "גרוש/ה",
};

const UserProfile = ({user} : {user: AuthUser}) => {
  return (
      <div>
          <h1>הפרופיל שלי</h1>
          <p>שם פרטי: {user.firstName}</p>
          <p>שם משפחה: {user.lastName}</p>
          <p>אימייל: {user.email}</p>
          <p>טלפון: {user.phone}</p>
          <p>עיר: {user.city}</p>
          <p>כתובת: {user.address}</p>
          <p>גיל: {user.age}</p>
          <p>תאריך לידה: {user.birthDate}</p>
          <p>מצב משפחתי: {MARITAL_STATUS_LABELS[user.maritalStatus]}</p>
      </div>
  );
}

export default UserProfile