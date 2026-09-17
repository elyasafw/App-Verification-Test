import cors from "cors";
import "dotenv/config";
import express from "express";
import authRouter from "./routes/authRouters.js";
import userProfileRouter from "./routes/userProfileRoute.js";

const PORT = 4000;

const app = express();
app.use(express.json(), cors());

app.use(authRouter);
app.use(userProfileRouter);

app.use((err, req, res, _next) => {
    const errMsg = err.message || "internal server error";
    const errStatus = err.status || 500;

    console.log(`Middleware Error: ${errMsg}`);
    res.status(errStatus).json({ error: errMsg });
});

app.listen(PORT, () => {
    console.log(`App running on:  http://localhost:${PORT}`);
});
