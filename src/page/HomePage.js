import React, { useContext } from "react";
import products from "../data/products.json";
import { CartContext } from "../store/CartContext";
import Card from "../components/productCard/Card";

function HomePage() {
  const { addToCart } = useContext(CartContext);

  const productInStorage = localStorage.getItem("product");

  console.log(JSON.parse(productInStorage));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default HomePage;
