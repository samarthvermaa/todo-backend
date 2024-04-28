import { Router } from "express";
const todoRouter = Router();
import { addTodo, completeTodo } from "../types";

todoRouter.post("/todo", (req, res) => {
  const { body } = req;
  const validateBody = addTodo.safeParse(body);
  if (!validateBody.success) {
    return res.status(400).json({ error: validateBody.error });
  }
});
todoRouter.get("/todos", (req, res) => {
  res.status(200).json({ msg: "ji" });
});
todoRouter.put("/completed", (req, res) => {
  const { body } = req;
  const validateBody = completeTodo.safeParse(body);
  if (!validateBody.success) {
    return res.status(400).json({ error: validateBody.error });
  }
});

export { todoRouter };
