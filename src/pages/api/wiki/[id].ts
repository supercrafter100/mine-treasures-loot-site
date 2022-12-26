import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, existsSync, fstat } from "fs";
import { join } from "path";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const path = join(__dirname, '../../../../../wiki/', (id as string) + ".md");

    if (!existsSync(path)) {
        res.status(404).send({ message: "Not found" });
        return;
    }

    const markdownFile = readFileSync(path, 'utf-8');
    res.status(200).send(markdownFile);
    return;
}