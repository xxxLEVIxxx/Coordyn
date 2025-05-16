import express from "express";
import cors from "cors";
import authRoutes from "./features/auth";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/auth", authRoutes);

export default app;
