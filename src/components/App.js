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
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks}/>
      <NewTaskForm />
      <TaskList tasks={taskArray}/>
    </div>
  );
}

export default App;
