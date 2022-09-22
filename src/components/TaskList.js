import React from "react";
import Task from "./Task";
import shortid from 'shortid'; //for unique ids used as keys

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        <Task tasks={tasks} removeTask={removeTask} />
      </ul>
    </div>
  );
}

export default TaskList;
