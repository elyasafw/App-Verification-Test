import fs from "fs/promises";

const DATA = "./data/users.json";

export async function loadData() {
    const data = await fs.readFile(DATA, "utf-8");
    return JSON.parse(data);
}

export async function writeData(data) {
    await fs.writeFile(DATA, JSON.stringify(data, null, 4), "utf-8");
}
