import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../utils/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let results = await pool.query('SELECT downloads, views, date FROM stats ORDER BY id DESC LIMIT 30').then((res) => res[0]) as Array<any>;
    for (const result of results) {
        const d = new Date(result["date"]);
        result["date"] = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    }
    return res.status(200).json(results);
}