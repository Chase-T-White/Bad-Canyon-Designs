import React from "react";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import products from "../../data/products.json";
import { useSelector } from "react-redux";

const ProductList = () => {
  const isGridView = useSelector((state) => state.view.gridView);
  if (ProductList.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }

  if (isGridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
