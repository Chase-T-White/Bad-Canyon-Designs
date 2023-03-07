import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/viewSlice";
import products from "../../data/products.json";

const Sort = () => {
  const dispatch = useDispatch();
  const gridView = useSelector((state) => state.view.gridView);
  return (
    <div>
      <div>
        <Button>
          <BsFillGridFill onClick={dispatch(viewActions.isGridView)} />
        </Button>
        <Button>
          <BsList onClick={dispatch(viewActions.isNotGridView)} />
        </Button>
      </div>
      <p>{products.length} items available</p>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="text-white">Sort By</Form.Label>
          <Form.Select>
            <option>Price (Lowest)</option>
            <option>Price (Highest)</option>
            <option>Name (a-z)</option>
            <option>Name (z-a)</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Sort;
