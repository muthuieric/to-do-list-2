import React, { useState } from "react";

const Form = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [more, setMore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAddTask({ title, more });
      setTitle("");
      setMore("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex justify-center items-center " >
      <input
        className="px-3 py-2 rounded-md border"
        type="text"
        name="title"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        name="more"
        placeholder="Additional Info"
        value={more}
        onChange={(e) => setMore(e.target.value)}
        className="ml-2 px-3 py-2 rounded-md border"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Add Task</button>
    </form>
  );
};

export default Form;
