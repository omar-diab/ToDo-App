import React from 'react';

const NoTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-60 lg:h-72 bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 rounded-lg shadow-lg text-black p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">No Tasks</h1>
      <p className="text-base md:text-lg lg:text-xl text-center text-gray-600">
        You have no tasks at the moment. Relax and enjoy your day!
      </p>
    </div>
  );
};

export default NoTasks;
