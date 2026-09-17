import { loadData } from "../utils/Tools.js";

export async function getUserById(id) {
    const users = await loadData();
    const user = users.find((u) => u.id === id);

    if (!user) {
        throw Object.assign(new Error("user not exist in system"), {
            status: 404,
        });
    }

    const { password, ...safeUser } = user;
    return safeUser;
}
