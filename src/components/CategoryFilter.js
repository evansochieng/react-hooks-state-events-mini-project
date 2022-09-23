import React, { useState } from "react";
import shortid from "shortid";

function CategoryFilter({ categories, filterTasks }) {
  //Set state for button - Set its value when clicked
  const [btnName, setBtnName] = useState('');
  const [btnValue, setBtnValue] = useState(false)
  
  //let btnValue = '';

  // Grab value of button when clicked and pass it to filterTasks function
  function selectCategory(event){
    //btnValue = event.target.name;
    setBtnValue(true);
    setBtnName(event.target.name);
    filterTasks(event.target.name);
    console.log(btnName);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( (category) => {
        return (
        <button 
          key={shortid.generate()} 
          onClick={(e) => selectCategory(e)} 
          name={category}
          className={(btnName === category) && btnValue ? 'selected' : null}
          >
            {category}
        </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
