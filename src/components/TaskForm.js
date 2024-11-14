import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskForm({ onSubmit, editableTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [priority, setPriority] = useState("Medium");

  // Use useEffect to populate the form if editableTask is passed
  useEffect(() => {
    if (editableTask) {
      setTitle(editableTask.title);
      setDescription(editableTask.description);
      setDueDate(new Date(editableTask.dueDate)); // Ensure it is a Date object
      setTime(new Date(editableTask.dueDate)); // Extract time from the due date
      setPriority(editableTask.priority);
    }
  }, [editableTask]); // Re-run when editableTask changes

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the date and time as ISO string for consistency
    const task = {
      title,
      description,
      dueDate: new Date(
        dueDate.setHours(time.getHours(), time.getMinutes())
      ).toISOString(),
      priority,
    };
    onSubmit(task);
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setTime(new Date());
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold text-white mb-4">
        {editableTask ? "Edit Task" : "Add Task"}
      </h2>

      {/* Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 mb-4 text-white bg-gray-700 rounded-lg"
        required
      />

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 mb-4 text-white bg-gray-700 rounded-lg"
        rows="4"
      ></textarea>

      {/* Due Date and Time Picker side by side */}
      <div className="flex justify-between gap-4 mb-4">
        {/* Calendar Icon and Date Picker */}
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-white" size={20} />
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="MMMM d, yyyy"
            className="p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>

        {/* Time Icon and Time Picker */}
        <div className="flex items-center gap-2">
          <FaClock className="text-white" size={20} />
          <input
            type="time"
            value={`${time.getHours().toString().padStart(2, "0")}:${time
              .getMinutes()
              .toString()
              .padStart(2, "0")}`}
            onChange={(e) => {
              const newTime = new Date(dueDate); // Set same day as dueDate
              const [hours, minutes] = e.target.value.split(":");
              newTime.setHours(hours);
              newTime.setMinutes(minutes);
              setTime(newTime);
            }}
            className="p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
      </div>

      {/* Priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 bg-gray-700 text-white rounded-lg mb-4"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-lg"
      >
        {editableTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
