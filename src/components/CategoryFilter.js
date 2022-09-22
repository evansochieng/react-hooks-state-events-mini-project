import React from "react";
import shortid from "shortid";

function CategoryFilter({ categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( (category) => {
        return <button key={shortid.generate()}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
