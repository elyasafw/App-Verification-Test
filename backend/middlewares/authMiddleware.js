import { verifyToken } from "../services/authService.js";

export function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw Object.assign(new Error("missing or invalid token"), {
            status: 401,
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        throw Object.assign(new Error("invalid or expired token"), {
            status: 401,
        });
    }
}
