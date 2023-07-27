import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Form from "./Form";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://to-do-data.onrender.com/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const handleDeleteTask = (taskId) => {
    fetch(`https://to-do-data.onrender.com/tasks${taskId}`, {
      method: "DELETE",
    }).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });
  };

  const handleAddTask = (newTask) => {
    fetch("https://to-do-data.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
      });
  };

  return (
    <div className="home">
      <Form onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
