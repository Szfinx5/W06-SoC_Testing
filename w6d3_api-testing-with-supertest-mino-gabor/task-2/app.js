import express from "express";
import logger from "morgan";
import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/users", usersRouter);

export default app;
