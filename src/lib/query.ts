import db from './db'

export async function query<T = any>(sql: string, params?: any[]) {
    try {
        const [rows] = await db.query(sql, params)
        return rows as T
    } catch (error) {
        console.error('MySQL query error:', error)
        throw error
    }
}
