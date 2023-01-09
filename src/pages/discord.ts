import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    return res.redirect('https://discord.gg/ASB67acx2Y');
}