"use server";

import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { CreateTaskDTO } from "./dtos";
import { Status } from "@prisma/client";

export async function createTask({ title, description }: CreateTaskDTO) {
  if (typeof title !== "string" || title.length < 2) return;
  if (typeof description !== "string" || description.length < 10) return;

  try {
    await prisma.task.create({
      data: {
        title,
        description,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not create task, please try again");
  }

  redirect("/");
}

export async function deleteTask(formData: FormData) {
  const id = formData.get("id")?.toString();

  if (!id) return;

  try {
    await prisma.task.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    console.log(error);
    throw new Error("Could not delete task, please try again");
  }

  redirect("/")
}


export async function updateTask(formData: FormData) {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const status = formData.get("status") as Status;
  const id = formData.get("id")?.toString();

  if (typeof title !== "string" || title.length < 2) return;
  if (typeof description !== "string" || description.length < 10) return;
  if (!status) return;
  if (typeof id !== 'string') return;

  try {
    await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, description, status},
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not update task, please try again");
  }

  revalidatePath(`/task/${id}`);
  redirect(`/task/${id}`);
}