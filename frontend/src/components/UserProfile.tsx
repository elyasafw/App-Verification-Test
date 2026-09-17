import type { AuthUser } from "../api/authApi";

const MARITAL_STATUS_LABELS = {
  single: "רווק/ה",
  married: "נשוי/אה",
  divorced: "גרוש/ה",
};

const UserProfile = ({user} : {user: AuthUser}) => {
  return (
      <div className="profile-details">
          <h1>הפרופיל שלי</h1>
          <p><span>שם פרטי</span>{user.firstName}</p>
          <p><span>שם משפחה</span>{user.lastName}</p>
          <p><span>אימייל</span>{user.email}</p>
          <p><span>טלפון</span>{user.phone}</p>
          <p><span>עיר</span>{user.city}</p>
          <p><span>כתובת</span>{user.address}</p>
          <p><span>גיל</span>{user.age}</p>
          <p><span>תאריך לידה</span>{user.birthDate}</p>
          <p><span>מצב משפחתי</span>{MARITAL_STATUS_LABELS[user.maritalStatus]}</p>
      </div>
  );
}

export default UserProfile