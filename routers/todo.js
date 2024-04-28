import { Router } from "express";
const todoRouter = Router();
import { addTodo, completeTodo } from "../types/index.js";
import { TODOS } from "../db/index.js";
import { v4 as uuidv4 } from "uuid";
import { UUID } from "bson";

todoRouter.post("/todo", async (req, res) => {
  const { body } = req;
  const validateBody = addTodo.safeParse(body);
  if (!validateBody.success) {
    return res.status(400).json({ error: validateBody.error });
  }
  try {
    const result = await TODOS.create({
      uuid: uuidv4(),
      title: body.title,
      description: body.description,
    });
    return res.status(201).json({ result });
  } catch (error) {
    console.log("error--->", error);
    return res.status(500).json({ error: "unable to create todo" });
  }
});
todoRouter.get("/todos", async (req, res) => {
  try {
    const todos = await TODOS.find().lean();
    return res.status(200).json({ todos });
  } catch (error) {
    console.log("error--->", error);
    return res.status(500).json({ error: "unable to fetch todo" });
  }
});
todoRouter.put("/completed", async (req, res) => {
  const { body } = req;
  const validateBody = completeTodo.safeParse(body);
  if (!validateBody.success) {
    return res.status(400).json({ error: validateBody.error });
  }
  try {
    const result = await TODOS.findOneAndUpdate(
      {
        uuid: new UUID(body.id),
      },
      {
        $set: { completed: true },
      },
      { returnDocument: "after" }
    ).lean();
    return res.status(200).json({ result });
  } catch (error) {
    console.log("error--->", error);
    return res.status(500).json({ error: "unable to update todo" });
  }
});

export { todoRouter };
