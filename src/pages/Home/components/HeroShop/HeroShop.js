import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./heroShop.css";
import { useSelector, useDispatch } from "react-redux";
import { sortActions } from "../../../../store/sortSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../utils/helpers";
import { useInView } from "react-intersection-observer";

const HeroShop = () => {
  const { ref: featuredRow, inView: featuredRowVisible } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const featuredProducts = useSelector((state) => state.sort.featured_products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortActions.pullFeaturedProducts());
  }, [dispatch]);

  return (
    <section className="heroShop">
      <header className="section-header">
        <h4>Shop</h4>
      </header>
      <Row className="shop__sale-row">
        <Container className="text-center d-flex align-items-center">
          <Col>
            <p className="shop__sales-text">
              In celebration of the spirit of the huntsman, I am offering 10%
              off and free shipping on all hats for a limited time!
            </p>
            <Button size="lg" className="px-5">
              <Link to={"shop"} className="text-white shop__sales-button-link">
                Shop Now
              </Link>
            </Button>
          </Col>
        </Container>
      </Row>
      <Container>
        <Row>
          <h3 className="text-center mb-3">Featured Products</h3>
          <Row xs={1} sm={2} md={3} className="card-row" ref={featuredRow}>
            {featuredProducts.map((product) => {
              return (
                <Card
                  className={`product-card featured-card ${
                    featuredRowVisible ? "slideRight" : ""
                  }`}
                >
                  <Link to={`shop/${product.id}`}>
                    <div className="product-card__img-container">
                      <Card.Img
                        variant="top"
                        src={product.imageMain}
                        className="product-card__img"
                      />
                    </div>
                  </Link>
                  <Card.Body className="product-card__body">
                    <Link to={`shop/${product.id}`}>
                      <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text className="text-dark">
                      {formatPrice(product.price)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default HeroShop;
