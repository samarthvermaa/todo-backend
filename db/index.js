import { connect, Schema, model } from "mongoose";
connect(
  "mongodb+srv://samarth:samarth123@cluster0.9eycvjx.mongodb.net/todo-db"
);

const todoSchema = new Schema(
  {
    uuid: { type: Schema.Types.UUID, required: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TODOS = model("todo", todoSchema);
