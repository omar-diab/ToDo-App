import { updateTask } from "@/utils/actions";
import prisma from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EditTaskPageProps {
  params: { id: string };
}

const EditTaskPage = async ({ params }: EditTaskPageProps) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound();

  return (
    <section>
      <Link
        href={`/task/${task.id}`}
        className="block mb-20 hover:text-blue-600 hover:underline text-xl"
      >
        {`<< `}Back to task details
      </Link>
      <div className="w-2/3 max-md:w-full mx-auto rounded-lg p-5 bg-cyan-900 border-2 border-gray-300">
        <h1 className="mb-7 font-bold text-3xl">Edit Task</h1>
        <form action={updateTask} className="flex flex-col gap-6">
          <input type="hidden" name="id" value={task.id} />
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            className="p-2 text-xl rounded-md text-gray-950"
            defaultValue={task.title}
          />
          <select
            name="status"
            defaultValue={task.status}
            className="p-2 text-xl rounded-md text-gray-950"
          >
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
          <textarea
            placeholder="Task Description"
            rows={5}
            name="description"
            defaultValue={task.description}
            className="p-2 text-xl rounded-md text-gray-950 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-300 hover:bg-cyan-400 transition-colors py-2 px-4 rounded-md font-semibold text-black text-xl"
          >
            Edit Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditTaskPage;
