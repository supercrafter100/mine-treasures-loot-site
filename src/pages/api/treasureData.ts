import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    const json = JSON.parse(readFileSync('data.json', 'utf-8'));
    return res.json(json)
}