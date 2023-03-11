import React, { useState, useEffect } from "react";
import categories from "../../data/productFields.json";

const Filter = () => {
  const [filter, setFilter] = useState("none");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (filter === "none") {
      return;
    } else {
      const filteredCategories = categories.find((category) => {
        return category.category === filter;
      });
      return setSubCategories(filteredCategories.subcategories);
    }
  }, [filter]);

  return (
    <aside className="text-white">
      <h3>Filters</h3>
      <hr />
      <h4>
        <button onClick={() => setFilter("none")}>All Categories</button>
      </h4>
      {filter !== "none" && <h4>{filter}</h4>}
      <div className="categories">
        {filter === "none"
          ? categories.map((category) => {
              return (
                <button
                  key={category.id}
                  className="d-block ps-3"
                  value={category.category}
                  onClick={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  {category.category}
                </button>
              );
            })
          : subCategories.map((subCategory, i) => {
              return (
                <button key={i} className="d-block ps-3" value={subCategory}>
                  {subCategory}
                </button>
              );
            })}
      </div>
    </aside>
  );
};

export default Filter;
