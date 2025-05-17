import { Router } from "express";
import { register, login, session } from "./controller";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/session", session);

export default authRoutes;
