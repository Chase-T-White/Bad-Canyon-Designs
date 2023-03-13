import React from "react";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.sort.filtered_products);
  const isGridView = useSelector((state) => state.view.gridView);
  if (products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }

  if (isGridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
