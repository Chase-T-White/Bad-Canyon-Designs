import React from "react";
import { useParams } from "react-router-dom";
import { Loading, Error } from "../../components";
import products from "../../data/products.json";
import { formatPrice } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const SingleProduct = () => {
  const { id } = useParams();
  const fetchProduct = products.find((product) => product.id === id);
  const { name, price, imageMain, description, colors, category, subcategory } =
    fetchProduct;
  return (
    <main>
      <Container>
        <Image
          fluid
          src={imageMain}
          className="h-100"
          style={{ objectFit: "cover" }}
        ></Image>
        <aside>
          <h2>{name}</h2>
          <p>Designs by Nickolas White</p>
          <p className="price">{formatPrice(price)}</p>
        </aside>
      </Container>
    </main>
  );
};

export default SingleProduct;
