import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/viewSlice";
import { sortActions } from "../../store/sortSlice";
import products from "../../data/products.json";

const Sort = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.sort.filtered_products);
  const isGridView = useSelector((state) => state.view.gridView);
  const toGridView = () => {
    dispatch(viewActions.gridView());
  };

  const toListView = () => {
    dispatch(viewActions.listView());
  };

  const updateSort = (e) => {
    dispatch(sortActions.sortProducts(e.target.value));
  };

  return (
    <Row className="align-items-end mb-3">
      <Col className="d-flex">
        <Button className="me-1">
          <BsFillGridFill onClick={toGridView} />
        </Button>
        <Button className="me-2">
          <BsList onClick={toListView} />
        </Button>
        <p className="text-white">{filteredProducts.length} items available</p>
        <hr />
      </Col>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="sort" className="text-white">
              Sort By
            </Form.Label>
            <Form.Select name="sort" id="sort" onChange={updateSort}>
              <option value="none">-</option>
              <option value="price-lowest">Price (Lowest)</option>
              <option value="price-highest">Price (Highest)</option>
              <option value="name-a">Name (a-z)</option>
              <option value="name-z">Name (z-a)</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Sort;
