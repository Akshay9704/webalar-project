import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extented: false }));
app.use(express.static("public"));
app.use(cookieParser());

//Routes
import userRouter from "./routes/user.router.js"
import recordsRouter from "./routes/records.router.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/records", recordsRouter);

export { app };