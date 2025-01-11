import dotenv from 'dotenv'
import { env } from 'process'

dotenv.config()

export const config = {
    port: env.PORT || 3000,
    JWT_SECRET_KEY: env.JWT_SECRET_KEY,
    MYSQL_DATABASE: env.MYSQL_DATABASE,
    MYSQL_USER: env.MYSQL_USER,
    MYSQL_PASSWORD: env.MYSQL_PASSWORD,
    MYSQL_ROOT_PASSWORD: env.MYSQL_ROOT_PASSWORD,
    MYSQL_PORT: 3306
}