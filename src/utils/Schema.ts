import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(2, { message: "Title must be at least 2 characters" })
    .max(200, { message: "Title must be at more 200 characters" }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000),
});

export const UpdateTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(2, { message: "Title must be at least 2 characters" })
    .max(200, { message: "Title must be at more 200 characters" }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000),
});