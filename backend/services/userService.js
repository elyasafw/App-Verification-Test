import { loadData } from "../utils/Tools.js";

export async function getUserById(id) {
    const users = await loadData();
    const user = users.find((u) => u.id === id);

    if (!user) {
        throw Object.assign(
            new Error(`משתמש לא נמצא במערכת, אנא עבור לדף הרשמה`),
            {
                status: 404,
            },
        );
    }

    const { password, ...safeUser } = user;
    return safeUser;
}
