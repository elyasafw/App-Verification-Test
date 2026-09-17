# אפליקציית אימות משתמשים

אפליקציה קטנה עם הרשמה, התחברות ועמוד פרופיל אישי.  
BackEnd - (Node/Express)  
FrontEnd - (React + Vite)  

**כל אחד רץ בנפרד**

## איך מריצים

### BackEnd:

```bash
cd backend
npm install
npm run dev
```

רץ על `http://localhost:4000`.

צריך קובץ `.env` בתוך `backend/` עם:

```
PORT=4000
JWT_SECRET= צריך ליצור מפתח JWT
```

### FrontEnd:

```bash
cd frontend
npm install
npm run dev
```

רץ על `http://localhost:5173` (או פורט אחר אם תפוס).
