import prisma from "@/utils/db";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { notFound } from "next/navigation";
import { deleteTask } from "@/utils/actions";

interface TaskDetailsPageProps {
  params: { id: string };
}

const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound();

  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* Back Link */}
      <Link
        href="/"
        className="block mb-8 text-xl text-blue-500 hover:text-blue-700 hover:underline"
      >
        {"<< "}Back to task table
      </Link>

      {/* Task Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl text-red-600">
            {task.title}
          </h2>
          <p className="text-yellow-400 mt-2 text-sm">
            Created on: {new Date(task.createdAt).toDateString()}
          </p>
        </div>
        <div className="flex space-x-4">
          <Link
            href={`/task/${task.id}/edit`}
            className="bg-green-700 hover:bg-green-900 transition-colors py-2 px-4 rounded-lg text-lg md:text-xl text-white"
          >
            Edit
          </Link>
          <form action={deleteTask}>
            <input type="hidden" name="id" value={task.id} />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 transition-colors py-2 px-4 rounded-lg text-lg md:text-xl text-white"
            >
              Delete
            </button>
          </form>
        </div>
      </div>

      {/* Task Details */}
      <div className="bg-cyan-700 text-white p-7 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <StatusBadge status={task.status} />
        </div>
        <p className="text-lg md:text-xl leading-relaxed whitespace-normal">
          {task.description}
        </p>
      </div>
    </section>
  );
};

export default TaskDetailsPage;
