import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { config as envConfig } from "dotenv";

envConfig();

import { notFound, errorHandler } from "./middlewares";
import { api } from "./api";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

export { app };
