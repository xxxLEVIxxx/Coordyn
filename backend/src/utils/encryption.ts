import bcrypt from "bcryptjs";
export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};

export const comparePassword = async (password: string, hashedPwd: string) => {
  const isMatch = await bcrypt.compare(password, hashedPwd);
  return isMatch;
};
