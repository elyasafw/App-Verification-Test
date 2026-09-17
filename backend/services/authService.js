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

export function getUserByEmail(users, email) {
    const user = users.find((u) => u.email === email);
    return user;
}

export async function createNewUser(
    allUsers,
    userName,
    email,
    phone,
    password,
) {
    const hashedPass = await hashPassword(password);

    const nextId = Math.max(...allUsers.map((u) => u.id), 0) + 1;

    return {
        id: nextId,
        userName,
        email,
        phone,
        password: hashedPass,
    };
}

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: "10m",
    });
    return token;
};

export function verifiedUser() {}
