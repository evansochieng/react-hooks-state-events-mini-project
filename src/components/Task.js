import React from "react";
import shortid from 'shortid'; //for unique ids

//let key = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 10);

function Task({ tasks }) {
  return (
    <>
    {/* Display all tasks in the app */}
    {tasks.map( (task) => {
      const {text, category} = task;
      return (<div key={shortid.generate()} className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete">X</button>
      </div>)
    })}
    </>
  );
}

export default Task;
