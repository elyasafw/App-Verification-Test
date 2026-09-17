import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { loadData, writeData } from "../utils/Tools.js";

const JWT_SECRET = process.env.JWT_SECRET;

export function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

export function compareHash(password, hash) {
    return bcrypt.compare(password, hash);
}

export async function createNewUser({
    firstName,
    lastName,
    email,
    phone,
    password,
    city,
    address,
    age,
    maritalStatus,
    birthDate,
}) {
    const users = await loadData();

    if (users.find((u) => u.email === email)) {
        throw Object.assign(
            new Error(
                `משתמש עם אימייל '${email}' כבר קיים במערכת, אנא עבור לדף התחברות`,
            ),
            { status: 409 },
        );
    }

    const hashedPass = await hashPassword(password);

    const newUser = {
        id: Math.max(...users.map((u) => u.id), 0) + 1,
        firstName,
        lastName,
        email,
        phone,
        password: hashedPass,
        city,
        address,
        age,
        maritalStatus,
        birthDate,
    };

    users.push(newUser);
    await writeData(users);

    return newUser;
}

export async function loginUser(phone, password) {
    const users = await loadData();
    const user = users.find((u) => u.phone === phone);

    if (!user) {
        throw Object.assign(
            new Error(`משתמש עם טלפון '${phone}' לא נמצא במערכת, אנא עבור לדף הרשמה`),
            {
                status: 404,
            },
        );
    }

    const isMatch = await compareHash(password, user.password);
    if (!isMatch)
        throw Object.assign(new Error("סיסמה שגויה ... נסה שוב"), {
            status: 401,
        });

    return generateToken({ id: user.id, email: user.email });
}

export function generateToken(payload) {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "10m",
    });
    return token;
}

export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
