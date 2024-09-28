import React from "react";
import StatusBadge from "../StatusBadge";
import Link from "next/link";
import prisma from "@/utils/db";

const Tasks = async () => {
    const tasks = await prisma.task.findMany();

  return (
    <>
      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="hidden md:table w-full text-left bg-cyan-950 rounded-lg shadow-md">
          <thead className="bg-cyan-800 border-b-2 border-white text-black">
            <tr>
              <th className="p-4 text-left text-lg font-semibold">
                Task Number
              </th>
              <th className="p-4 text-left text-lg font-semibold">
                Task Title
              </th>
              <th className="p-4 text-left text-lg font-semibold">
                Task Status
              </th>
              <th className="p-4 text-left text-lg font-semibold">Details</th>
            </tr>
          </thead>
          <tbody className="text-white text-lg divide-y divide-white">
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{task.title}</td>
                <td className="p-4">
                  <StatusBadge status={task.status} />
                </td>
                <td className="p-4">
                  <Link
                    href={`/task/${task.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition-colors rounded-lg py-2 px-4"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Responsive Task Cards */}
        <div className="md:hidden space-y-5">
          {tasks.map((task, index) => (
            <div key={task.id} className="bg-cyan-800 p-5 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <StatusBadge status={task.status} />
              </div>
              <p className="text-white mb-3">Task Number: {index + 1}</p>
              <p className="text-yellow-400">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={`/task/${task.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition-colors rounded-lg py-2 px-4"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
