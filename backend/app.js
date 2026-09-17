import cors from "cors";
import "dotenv/config";
import express from "express";
import authRouter from "./routes/authRouters.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json(), cors());

app.use(authRouter);

app.use((err, req, res, _next) => {
    const errMsg = err.message || "internal server error";
    console.log(err);
    const errStatus = err.status || 500;

    res.status(errStatus).json({ error: errMsg });
});

app.listen(PORT, () => {
    console.log(`App running on:  http://localhost:${PORT}`);
});
