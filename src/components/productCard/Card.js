import React, { useContext } from "react";
import "./productCard.css";
import { CartContext } from "../../store/CartContext";

function Card({ product, addToCart }) {
  const { inCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="image">
        <img src={product.imageURL} alt="" />
      </div>
      <div className="card-content">
        <div className="wrapper">
          <div className="title">{product.title}</div>
          <p className="price">{product.price}$</p>

          <div className="btns">
            {product.discount && <button disabled>{product.discount}%</button>}
            {/* <button onClick={addToCart}>Add to cart</button> */}
            {inCart(product) ? (
              <button
                style={{ backgroundColor: "gray", border: "none" }}
                disabled
              >
                Already added
              </button>
            ) : (
              <button onClick={addToCart}>Add to cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
