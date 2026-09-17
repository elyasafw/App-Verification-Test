import {
    createNewUser,
    getUserByEmail,
    loadData,
    writeData,
} from "../services/authService.js";

export async function register(req, res) {
    const { userName, email, phone, password } = req.body;

    const users = await loadData();

    if (getUserByEmail(users, email)) {
        throw new Error("user already exist", 409);
    }

    const newUser = await createNewUser(
        users,
        userName,
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
