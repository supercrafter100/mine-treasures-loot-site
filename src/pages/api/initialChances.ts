import { NextApiRequest, NextApiResponse } from "next";
import data from "../../initialChances.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    return res.json(data)
}