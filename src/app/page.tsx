import Link from "next/link";
import React from "react";
import prisma from "@/utils/db";
import Tasks from "@/components/home/Tasks";
import NoTasks from "@/components/home/NoTasks";

export const dynamic = 'force-dynamic';

// The page still static but every 10s the info changes
// export const revaldate = 10;

const Home = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl mb-10 font-bold text-center">Tasks List App</h1>

      {/* Add Task Button */}
      <div className="flex items-center justify-end mb-8">
        <Link
          href="/task/add"
          className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-2 px-6 text-xl font-semibold rounded-lg"
        >
          Add Task
        </Link>
      </div>

      {/* Task Table */}
        {tasks.length > 0? (
          <Tasks />
        ) : (
          <NoTasks/>
        )}
    </section>
  );
};

export default Home;
