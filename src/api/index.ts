import express from "express";
import { emojis } from "./emojis";
const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);

export { router as api };
