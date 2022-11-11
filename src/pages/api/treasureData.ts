import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    const json = JSON.parse(readFileSync(join('../../../data.json'), 'utf-8'));
    return res.json(json)
}