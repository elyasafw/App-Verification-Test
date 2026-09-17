import type { AuthUser } from "../api/authApi";

const UserProfile = ({user} : {user: AuthUser}) => {
  return (
      <div>
          <h1>הפרופיל שלי</h1>
          <p>שם משתמש: {user.username}</p>
          <p>אימייל: {user.email}</p>
          <p>טלפון: {user.phone}</p>
      </div>
  );
}

export default UserProfile