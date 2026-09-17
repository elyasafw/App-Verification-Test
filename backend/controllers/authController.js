import { createNewUser, loginUser } from "../services/authService.js";

export async function register(req, res) {
    const newUser = await createNewUser(req.body);

    res.status(201).json({
        mesage: `user created successfully ID: ${newUser.id}`,
    });
}

export async function login(req, res) {
    const { phone, password } = req.body;

    const token = await loginUser(phone, password);

    res.json({ message: "user login succussfully", token });
}
