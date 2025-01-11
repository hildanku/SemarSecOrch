import { drizzle } from 'drizzle-orm/mysql2'
import 'dotenv/config'

export const db = drizzle(
    `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@localhost:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`,
)
