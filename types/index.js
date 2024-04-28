import { z } from "zod";

export const addTodo = z.object({
  title: z.string({
    invalid_type_error: "Title type should be string",
    required_error: "Title should is required",
  }),
  description: z.string({
    invalid_type_error: "Description type should be string",
    required_error: "Description should is required",
  }),
});

export const completeTodo = z.object({
  id: z.string({
    invalid_type_error: "ID type should be string",
    required_error: "ID should is required",
  }),
});
