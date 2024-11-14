import React from "react";

function TaskList({ tasks, editTask, toggleCompletion, deleteTask }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Your Tasks</h2>

      {tasks.length === 0 ? (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <p>No tasks found based on your search and filter criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 text-gray-200"
            >
              <h3 className="font-bold text-lg text-white">{task.title}</h3>
              <p className="text-gray-400">{task.description}</p>
              <p className="text-sm mt-2 text-gray-400">
                Due: {formatDate(task.dueDate)} at {formatTime(task.dueDate)}
              </p>
              <p className="text-sm">Priority: {task.priority}</p>
              <p className="text-sm">
                Status: {task.completed ? "Completed" : "Incomplete"}
              </p>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => toggleCompletion(task.id)}
                  className={`w-full p-2 rounded-lg ${
                    task.completed ? "bg-green-600" : "bg-yellow-500"
                  } text-white font-semibold`}
                >
                  Mark as {task.completed ? "Incomplete" : "Completed"}
                </button>
                <button
                  onClick={() => editTask(task)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold"
                >
                  Edit Task
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg font-semibold"
                >
                  Delete Task
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
