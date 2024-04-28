import express from "express";
import { todoRouter } from "./routers/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/my", todoRouter);

app.listen(PORT, () => {
  console.log("Listening to PORT - " + PORT);
});
