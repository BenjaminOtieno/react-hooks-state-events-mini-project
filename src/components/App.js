import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [text, setText] = useState("");
  const [formCategory, setFormCategory] = useState("Code")

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const obj = {
    text: text,
    category: formCategory,
  }

  function onTaskFormSubmit() {
    setTasks([...tasks, obj])
  }

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setFormCategory(event.target.value)
  }

  function removeTask(taskItem) {
    setTasks(tasks.filter((item) => item.text !== taskItem));
  }

  const filteredTasks = tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectedCategory={selectedCategory}
        onHandleCategory={setSelectedCategory} />
      <NewTaskForm onTextChange={handleTextChange} onCategoryChange={handleCategoryChange}
        formCategory={formCategory} categories={CATEGORIES.filter((item) => item !== "All")}
        onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={removeTask} />
    </div>
  );
}

export default App;
