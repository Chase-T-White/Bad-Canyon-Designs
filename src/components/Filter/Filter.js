import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortActions } from "../../store/sortSlice";
import categories from "../../data/productFields.json";

const Filter = () => {
  const { filter, subCategories } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const setFilter = (e) => {
    dispatch(sortActions.filterProducts(e.target.value));
  };

  const setSubFilter = (e) => {
    dispatch(sortActions.filterSubProducts(e.target.value));
  };

  return (
    <aside className="text-white">
      <h3>Filters</h3>
      <hr />
      <h4>
        <button value="none" onClick={setFilter}>
          All Categories
        </button>
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
                  onClick={setFilter}
                >
                  {category.category}
                </button>
              );
            })
          : subCategories.map((subCategory, i) => {
              return (
                <button
                  key={i}
                  className="d-block ps-3"
                  value={subCategory}
                  onClick={setSubFilter}
                >
                  {subCategory}
                </button>
              );
            })}
      </div>
    </aside>
  );
};

export default Filter;
