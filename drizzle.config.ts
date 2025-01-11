import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
        host: 'localhost',
        database: process.env.MYSQL_DATABASE as string,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    },
})