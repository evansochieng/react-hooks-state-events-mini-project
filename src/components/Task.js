import React from "react";
import shortid from 'shortid'; //for unique ids used as keys

function Task({ tasks, removeTask }) {

  return (
    <>
    {/* Display all tasks in the app */}
    {tasks.map( (task) => {
      const newId = shortid.generate();
      task.id = newId;
      const {text, category} = task;
      return (<div key={newId} className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={() => removeTask(newId)}>X</button>
      </div>)
    })}
    </>
  );
}

export default Task;
