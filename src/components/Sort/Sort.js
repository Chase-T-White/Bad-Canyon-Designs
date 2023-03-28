import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/viewSlice";
import { sortActions } from "../../store/sortSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.sort.filtered_products);
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
        <div className="d-flex me-3">
          <Button className="me-1">
            <BsFillGridFill onClick={toGridView} />
          </Button>
          <Button>
            <BsList onClick={toListView} />
          </Button>
        </div>
        <div className="d-inline-flex align-items-center w-100">
          <p className="text-white mb-0">
            {filteredProducts.length} items available
          </p>
        </div>
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
