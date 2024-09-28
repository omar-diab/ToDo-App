import { Status } from "@prisma/client";

export type CreateTaskDTO = {
    title: string;
    description: string;
}

export type UpdateTaskDTO = {
    title: string;
    description: string;
    status: Status;
    id: string;
}