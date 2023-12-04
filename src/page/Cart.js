import React, { useContext, useState } from "react";
import Card from "../components/shoppingProductCart/Card";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./cart.css";

function Cart() {
  const { shoppingCart, removeFromCart, totalPrice } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <button
              style={{
                padding: 20,
                borderRadius: 8,
                border: "none",
                backgroundColor: "#7ed957",
                color: "white",
                cursor: "pointer",
                marginTop: 20,
                fontSize: 20,
              }}
              onClick={() => setShowModal(true)}
            >
              Daj mi racun
            </button>
            <Modal
              styles={{
                modal: { width: "30%", textAlign: "center" },
              }}
              open={showModal}
              onClose={() => setShowModal(false)}
              center
            >
              <p>Vas ukupan racun iznosi: {totalPrice().toFixed(2)}$</p>
              <button
                style={{
                  width: "50%",
                  padding: 16,
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: "#7ed957",
                  color: "white",
                  cursor: "pointer",
                  marginTop: 20,
                  fontSize: 20,
                }}
                onClick={() => setShowModal(false)}
              >
                Plati
              </button>
            </Modal>
          </div>
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
