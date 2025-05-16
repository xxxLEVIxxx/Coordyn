import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const DATABASE_URL =
  "postgresql://coordyn:Wz7t!fE9Lk#21XpB@localhost:5432/coordyn_db";
export const pool = new Pool({ connectionString: DATABASE_URL });
// username: coordyn
// password: Wz7t!fE9Lk#21XpB
// database name: coordyn_db
// DATABASE_URL=postgresql://coordyn:Wz7t!fE9Lk#21XpB@localhost:5432/coordyn_db
