import React from "react";

function Task({ task, removeTask}) {
  const {category, text, id} = task;
  return (
    <>
    {/* Display all tasks in the app */}
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => removeTask(id)}>X</button>
    </div>
    </>
  );
  // return (
  //   <>
  //   {/* Display all tasks in the app */}
  //   {tasks.map( (task) => {
  //     const newId = shortid.generate();
  //     task.id = newId;
  //     const {text, category} = task;
  //     return (<div key={newId} className="task">
  //       <div className="label">{category}</div>
  //       <div className="text">{text}</div>
  //       <button className="delete" onClick={() => removeTask(newId)}>X</button>
  //     </div>)
  //   })}
  //   </>
  // );
}

export default Task;
