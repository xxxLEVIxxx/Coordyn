import express from "express";
import cors from "cors";
import authRoutes from "./features/auth";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);

export default app;
