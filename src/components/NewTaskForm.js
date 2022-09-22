import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Filter out 'All' category from the others
  const optionValues = categories.filter(category => category !== 'All');

  // Define state variables for the form inputs
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('')

  // function grabCategory(event){
  //   console.log(event.target.value)
  // }

  // Handle form submission
  const addTask = (event) => {
    event.preventDefault();
    if (details && category){
      const myNewTask = {text: details, category: category};
      onTaskFormSubmit(myNewTask);
      setDetails('');
      setCategory('');
    }
  }

  return (
    <form className="new-task-form" onSubmit={(e) => addTask(e)}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={details} 
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {optionValues.map((optionValue) => {
            return (
              <option 
                key={optionValue} 
                value={optionValue}
              >
                {optionValue}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
