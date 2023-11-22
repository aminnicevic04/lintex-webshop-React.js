import React, { useContext } from "react";
import Card from "../components/shoppingProductCart/Card";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { shoppingCart, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map((product) => (
            <Card
              key={product.id}
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
            />
          ))}
          <button onClick={() => console.log(totalPrice())}>
            Daj mi racun
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Nema proizvoda</h1>
          <p>Vratite se na pocetnu stranicu.</p>
          <button
            style={{
              padding: 10,
              borderRadius: 8,
              border: "none",
              backgroundColor: "#7ed957",
              color: "white",
              cursor: "pointer",
              marginTop: 20,
              fontSize: 16,
            }}
            onClick={() => navigate("/")}
          >
            Pocetna stranica
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
