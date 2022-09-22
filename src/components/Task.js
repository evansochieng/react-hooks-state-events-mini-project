import React, { useState } from "react";
import shortid from 'shortid'; //for unique ids used as keys

function Task({ tasks }) {
  const [todo, setTodo] = useState(tasks)

  function removeTask(id) {
    // const remainingTasks = todo.filter((item) => item.id !== id)
    // setTodo(remainingTasks);
  }

  return (
    <>
    {/* Display all tasks in the app */}
    {tasks.map( (task) => {
      const {text, category} = task;
      return (<div key={shortid.generate()} className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={removeTask}>X</button>
      </div>)
    })}
    </>
  );
}

export default Task;
