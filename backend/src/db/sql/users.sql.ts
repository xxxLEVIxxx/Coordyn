import { db } from "..";

export const insertUser = async (username: string, hashedPwd: string) => {
  const result = await db.query(
    "INSERT INTO users (username, hashedpwd) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING RETURNING id",
    [username, hashedPwd]
  );
  return result.rows.length > 0 ? result.rows[0].id : null;
};

export const deleteUser = async (username: string) => {
  const result = await db.query("DELETE FROM users WHERE username = $1", [
    username,
  ]);
};

export const getUserPwd = async (username: string) => {
  const result = await db.query(
    `SELECT id, hashedPwd FROM users WHERE username = $1;`,
    [username]
  );

  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};
