import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/viewSlice";
import { sortActions } from "../../store/sortSlice";
import products from "../../data/products.json";

const Sort = () => {
  const dispatch = useDispatch();
  const isGridView = useSelector((state) => state.view.gridView);
  const toGridView = () => {
    dispatch(viewActions.gridView());
  };

  const toListView = () => {
    dispatch(viewActions.listView());
  };

  const updateSort = (e) => {
    console.log(e.target.value);
    dispatch(sortActions.sortProducts(e.target.value));
  };

  return (
    <div>
      <div>
        <Button>
          <BsFillGridFill onClick={toGridView} />
        </Button>
        <Button>
          <BsList onClick={toListView} />
        </Button>
      </div>
      <p>{products.length} items available</p>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="sort" className="text-white">
            Sort By
          </Form.Label>
          <Form.Select
            name="sort"
            id="sort"
            value={"sort"}
            onChange={updateSort}
          >
            <option value="none">-</option>
            <option value="price-lowest">Price (Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="name-a">Name (a-z)</option>
            <option value="name-z">Name (z-a)</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Sort;
