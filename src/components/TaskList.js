import React from "react";
import Task from "./Task";
import shortid from 'shortid'; //for unique ids used as keys

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map( (task) => {
        const newId = shortid.generate();
        task.id = newId;
        return <Task key={newId} task={task} removeTask={removeTask}/>
      })}
    </div>
  );
}

export default TaskList;
