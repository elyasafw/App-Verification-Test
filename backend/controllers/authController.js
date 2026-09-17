import { createNewUser, loginUser } from "../services/authService.js";

export async function register(req, res) {
    const { username, email, phone, password } = req.body;

    const newUser = await createNewUser(username, email, phone, password);

    res.status(201).json({
        mesage: `user created successfully ID: ${newUser.id}`,
    });
}

export async function login(req, res) {
    const { username, phone, password } = req.body;

    const token = await loginUser(username,phone, password);

    res.json({ message: "user login succussfully", token });
}
