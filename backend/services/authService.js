import bcrypt from "bcrypt";
import "dotenv/config";
import fs from "fs/promises";
import jwt from "jsonwebtoken";

const DATA = "./data/users.json";
const JWT_SECRET = process.env.JWT_SECRET;

export function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

export function compareHash(password, hash) {
    return bcrypt.compare(password, hash);
}

export async function loadData() {
    const data = await fs.readFile(DATA, "utf-8");
    return JSON.parse(data);
}

export async function writeData(data) {
    await fs.writeFile(DATA, JSON.stringify(data, null, 4), "utf-8");
}

export async function createNewUser(
    allUsers,
    username,
    email,
    phone,
    password,
) {
    const hashedPass = await hashPassword(password);

    const nextId = Math.max(...allUsers.map((u) => u.id), 0) + 1;

    return {
        id: nextId,
        username,
        email,
        phone,
        password: hashedPass,
    };
}

export function generateToken(payload) {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "10m",
    });
    return token;
}

export function verifyToken() {
    return jwt.verify(token, secret);
}

