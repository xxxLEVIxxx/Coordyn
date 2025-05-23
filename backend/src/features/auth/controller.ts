import { Request, Response } from "express";
import { insertUser } from "../../db/sql/users.sql";
import jwt, { JwtPayload } from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/encryption";
import { getUserPwd } from "../../db/sql/users.sql";
/*
In register, we first parse the username and hashedPwd from the req body. Then we call the 
insertUser function from the SQL commands, and then obtain the userID from this function. 
Then we will generate the JWT cookie with encrypted userID as token. 
*/
const JWT_SECRET = "Q5zjfMbdkLoyWopFNHh3fMtwKj1v9WwHncfH5uUl2GI=";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, password } = req.body;
  console.log("Received request: username $1, password $2", [
    username,
    password,
  ]);
  const hashedPwd = await hashPassword(password);
  try {
    const userId = await insertUser(username, hashedPwd);

    if (userId !== null) {
      const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "3d" });

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 72 * 60 * 60 * 1000,
      });
      return res.status(200).send("Logged in");
    } else {
      return res.status(401).send("User already exists");
    }
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

/*
In login, we first parse the username and password from the req body. Then we use the 
username to fetch the userId and the hashedPwd from the db. Next, we compare the password
and hashedPwd using bcrypt. If the passwords matches, we generate a JWT cookie by encrpting 
userId into the token and then send 200 status; else, send 401 status.
*/
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log("Received request: username $1, password $2", [
    username,
    password,
  ]);
  const result = await getUserPwd(username);
  if (result === null) {
    return res.status(401).send("Username does not exist");
  }
  console.log("result: ", result);
  const isMatch = await comparePassword(password, result.hashedpwd);
  const userId = result.id;
  if (isMatch) {
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "3d" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 72 * 60 * 60 * 1000,
    });
    return res.status(200).send("Logged in");
  } else {
    return res.status(401).send("Invalid password");
  }
};

/*
In session, the token in cookie where be verified through JWT.verify with out secret key, 
then it will be decoded into userId and then verified with db to see if the user exists. 
If it exists, we send 200 status; else, we send 401 status. 
*/
export const session = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("Unauthorized: No token");
  }
  try {
    jwt.verify(token, JWT_SECRET);
    return res.status(200).send("Authorized: Token Valid");
  } catch (err) {
    return res.status(401).send("Unauthorized: Invalid cookie");
  }
};
