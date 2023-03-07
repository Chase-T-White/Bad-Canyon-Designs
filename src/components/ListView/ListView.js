import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import Image from "react-bootstrap/Image";

const ListView = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <article>
            <Image
              fluid
              src={product.imageMain}
              className="h-100"
              style={{ objectFit: "cover" }}
            ></Image>
            <div>
              <h4>{product.name}</h4>
              <h5>{formatPrice(product.price)}</h5>
              <p>{product.description}</p>
              <Link to={`/shop/${product.id}`}>Details</Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListView;
