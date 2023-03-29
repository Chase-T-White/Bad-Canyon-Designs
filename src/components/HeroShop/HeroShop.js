import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { sortActions } from "../../store/sortSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const HeroShop = () => {
  const featuredProducts = useSelector((state) => state.sort.featured_products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortActions.pullFeaturedProducts());
  }, []);

  console.log(featuredProducts);

  return (
    <section className="heroShop">
      <header>
        <h4>Shop</h4>
      </header>
      <Container>
        <Row>
          <Col>
            <p>
              In celebration of the spirit of the huntsman, I am offering 10%
              off and free shipping on all hats for a limited time!
            </p>
          </Col>
          <Col>
            <Image fluid src="/assets/homeShop.jpg"></Image>
          </Col>
        </Row>
        <Row>
          <h3>Featured Products</h3>
          <Row sm={1} md={3}>
            {featuredProducts.map((product) => {
              return (
                <Card className="product-card">
                  <Link to={`${product.id}`}>
                    <div className="product-card__img-container">
                      <Card.Img
                        variant="top"
                        src={product.imageMain}
                        className="product-card__img"
                      />
                    </div>
                  </Link>
                  <Card.Body className="product-card__body">
                    <Link to={`${product.id}`}>
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
