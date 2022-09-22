import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
console.log(TASKS);

function App() {
  // Set state for tasks
  const [taskArray, setTaskArray] = useState(TASKS)

  // Delete task
  function removeTask(id) {
    const remainingTasks = taskArray.filter((item) => item.id !== id)
    setTaskArray(remainingTasks);
  }

  // Change list of tasks depending on the category
  const filterTasks = (category) => {
    const tasksList = [...taskArray]
    if (category === 'All') {
      setTaskArray(tasksList)
    } else {
      const newTasks = tasksList.filter(task => task.category === category);
      setTaskArray(newTasks);
    }
  }

  // Add task to list on file submit
  function onTaskFormSubmit({ category, text }) {
    const newTask = {category, text};
    const updatedTaskList = [...taskArray, newTask];
    setTaskArray(updatedTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskArray} removeTask={removeTask}/>
    </div>
  );
}

export default App;
