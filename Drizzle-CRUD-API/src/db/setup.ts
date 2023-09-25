import {drizzle} from "drizzle-orm/mysql2"
import mysql from "mysql2"
import * as schema from "./schema"

export const DB_URL = "mysql://root:91hQaH7Z3QSwH0rjDD5B@containers-us-west-198.railway.app:6028/railway"

const connection = mysql.createConnection(DB_URL)

export const db = drizzle(connection,{schema,mode:"default"})