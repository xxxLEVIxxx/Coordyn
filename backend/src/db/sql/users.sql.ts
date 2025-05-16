import { db } from "..";

export const insertUser = async (email: string, hashedPwd: string) => {
  const result = await db.query(
    "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id",
    [email, hashedPwd]
  );
};

export const deleteUser = () => {};

export const validateUser = () => {};
