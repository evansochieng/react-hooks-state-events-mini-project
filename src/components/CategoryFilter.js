import React, { useState } from "react";
import shortid from "shortid";

function CategoryFilter({ categories, filterTasks }) {
  //Set state for button - Set its value when clicked
  const [btnValue, setBtnValue] = useState('');

  // Grab value of button when clicked and pass it to filterTasks function
  function selectCategory(event){
    setBtnValue(event.target.name);
    filterTasks(event.target.name);
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
          className={btnValue ? 'selected' : null}
          >
            {category}
        </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
