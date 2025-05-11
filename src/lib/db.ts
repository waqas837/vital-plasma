import mysql from 'mysql2/promise'

const globalForMySQL = globalThis as unknown as {
    mysqlPool: mysql.Pool | undefined
}

// Create a single connection pool, reuse in dev
const pool =
    globalForMySQL.mysqlPool ??
    mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    })

if (process.env.NODE_ENV !== 'production') globalForMySQL.mysqlPool = pool

export default pool
