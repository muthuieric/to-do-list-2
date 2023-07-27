import React from "react";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className="p-2 m-3 bg-white shadow-md rounded-md" key={task.id}>
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p className="text-gray-600">{task.more}</p>
          <button
            onClick={() => onDelete(task.id)}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;


