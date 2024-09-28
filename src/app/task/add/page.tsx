import Link from "next/link";

import AddTaskForm from "./AddTaskForm";

const AddTaskPage = () => {
  return (
    <section>
      <Link href="/" className="block mb-20 hover:text-blue-600 hover:underline text-xl">
        {"<< "}Back to task table
      </Link>
      <div className="w-2/3 max-md:w-full mx-auto rounded-md p-5 bg-cyan-900 border-2 border-white">
        <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
          <AddTaskForm/>
      </div>
    </section>
  );
};

export default AddTaskPage;
