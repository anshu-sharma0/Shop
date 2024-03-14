import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({ ...quantities, [itemId]: quantity });
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleCheckout = () => {
    const updatedCartItems = cartItems.map((item) => {
      const updatedQuantity = quantities[item.id] || item.quantity;
      return { title: item.title, quantity: updatedQuantity || 1 };
    });

    console.log("Checkout items:");
    console.log(JSON.stringify(updatedCartItems, null, 2));
  };

  return (
    <>
      <div className="container">
        <div className="cart-nav">
          <h1>Cart</h1>
          <button onClick={handleCheckout}>CheckOut</button>
        </div>
        <div className="row row-cols-md-3 g-4">
          {cartItems.map((item) => (
            <div key={item.id} className="col">
              <div
                className="card border-light"
                style={{ width: "18rem", height: "100%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "contain", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                  <h5>$ {item.price}</h5>
                  <h5 className="card-text text-muted">
                    Rating: {item.rating.rate} /5
                  </h5>
                </div>
                <div style={{ marginRight: "auto" }}>
                  Quantity:
                  <input
                    type="number"
                    style={{ width: "40px", margin: "5px" }}
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    defaultValue={item.quantity}
                    min={1}
                  />
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
