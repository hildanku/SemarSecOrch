import { mysqlTable, serial, text, char } from 'drizzle-orm/mysql-core'

export const userTable = mysqlTable('users', {
    id: serial().primaryKey(),
    username: char({ length: 100 }).notNull().unique(),
    hash_password: text().notNull(),
    fullname: text().notNull(),
    avatar: text(),
})