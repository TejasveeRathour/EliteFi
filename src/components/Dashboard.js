import React, { useState } from "react";
import { useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editableTask, setEditableTask] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [completionFilter, setCompletionFilter] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add or update a task
  const addOrUpdateTask = (task) => {
    if (editableTask) {
      const updatedTasks = tasks.map((t) =>
        t.id === editableTask.id ? { ...task, id: editableTask.id } : t
      );
      setTasks(updatedTasks);
      setEditableTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]); // Assign a unique id to new task
    }
  };

  // Toggle completion status by task id
  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete task by id
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Edit task by setting it as the editableTask
  const editTask = (task) => {
    setEditableTask(task);
  };

  // Filter tasks by search and other criteria
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchText.toLowerCase()) ||
      task.description.toLowerCase().includes(searchText.toLowerCase());

    const matchesPriority = priorityFilter
      ? task.priority === priorityFilter
      : true;

    const matchesCompletion =
      completionFilter === ""
        ? true
        : completionFilter === "Completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesPriority && matchesCompletion;
  });

  // Separate overdue tasks (compare both date and time)
  const overdueTasks = filteredTasks.filter((task) => {
    const taskDate = new Date(task.dueDate); // Convert task's due date to Date object
    const currentDate = new Date(); // Get current date and time

    // Compare task's due date and time with current date and time
    return !task.completed && taskDate < currentDate;
  });

  // Separate non-overdue tasks
  const nonOverdueTasks = filteredTasks.filter(
    (task) => !overdueTasks.includes(task)
  );

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <TaskForm onSubmit={addOrUpdateTask} editableTask={editableTask} />

      {/* Search and Filter Section */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 bg-gray-800 text-white rounded-lg w-full md:w-1/3"
          />

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="p-2 bg-gray-800 text-white rounded-lg w-full md:w-1/3"
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={completionFilter}
            onChange={(e) => setCompletionFilter(e.target.value)}
            className="p-2 bg-gray-800 text-white rounded-lg w-full md:w-1/3"
          >
            <option value="">All Tasks</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </div>

      {/* Display Overdue Tasks */}
      {overdueTasks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">Overdue Tasks</h2>
          <TaskList
            tasks={overdueTasks}
            editTask={editTask}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        </div>
      )}

      {/* Display Non-Overdue Tasks */}
      <TaskList
        tasks={nonOverdueTasks}
        editTask={editTask}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Dashboard;