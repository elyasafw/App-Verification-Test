import { getUserById } from "../services/userService.js";

export async function getProfile(req, res) {
    const user = await getUserById(req.user.id);
    res.json(user);
}
