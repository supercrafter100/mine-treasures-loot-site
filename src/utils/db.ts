import mysql from "mysql2/promise";
let pool: mysql.Pool | null;
if (process.env.DB_DISABLED !== "true") {
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,

        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
}

export default pool;
