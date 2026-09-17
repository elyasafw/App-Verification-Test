import bcrypt from "bcrypt";
import {
    createNewUser,
    generateToken,
    loadData,
    writeData,
} from "../services/authService.js";

export async function register(req, res) {
    const { username, email, phone, password } = req.body;

    const users = await loadData();

    if (users.find((u) => u.email === email)) {
        throw Object.assign(new Error("user already exist"), { status: 409 });
    }

    const newUser = await createNewUser(
        users,
        username,
        email,
        phone,
        password,
    );

    users.push(newUser);
    await writeData(users);
    res.status(201).json({
        mesage: `user created successfully ID: ${newUser.id}`,
    });
}

export async function login(req, res) {
    const { username, phone, password } = req.body;

    const users = await loadData();
    const user = users.find((u) => u.phone === phone);

    if (!user) {
        throw Object.assign(new Error("user not exist in system"), {
            status: 404,
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        throw Object.assign(new Error("password incorrect"), { status: 401 });

    const token = generateToken({ id: user.id, email: user.email });

    return res.json({ message: "user login succussfully", token });
}
