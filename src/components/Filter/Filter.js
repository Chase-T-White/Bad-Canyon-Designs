import React from "react";
import categories from "../../data/productFields.json";

const Filter = () => {
  return (
    <aside>
      <h3 className="text-white">Filters</h3>
      <hr />
      <div className="categories text-white">
        {categories.map((category) => {
          return (
            <p key={category.id} className="ps-3">
              {category.category}
            </p>
          );
        })}
      </div>
    </aside>
  );
};

export default Filter;
