import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./dataSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { addItemToCart } from "./cartSlice";
import ViewCart from "./cart";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const cartItems = useSelector((state) => state.cart.items);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({ ...quantities, [itemId]: quantity });
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      dispatch(addItemToCart(item));
    } else {
      alert("This item is already in the cart.");
    }
  };

  return (
    <div className="container">
      <h1>Jewelery</h1>
      <div className="row row-cols-md-4 g-4">
        {data &&
          data
            .filter((item) => item.category === "jewelery")
            .map((item) => (
              <div key={item.id} className="col-sm-3 col-12 opac1">
                <div className="card border-light" style={{ height: "100%" }}>
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h5 className="card-title">{item.category}</h5>
                    <h5 className="card-title">{item.price}</h5>
                    <h5
                      className="card-title"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: "grey",
                      }}
                    >
                      {item.description}
                    </h5>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "auto" }}>
                        Quantity:
                        <input
                          type="number"
                          style={{ width: "40px", margin: "5px" }}
                          value={quantities[item.id] || 1}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                          min={1}
                        />
                      </div>
                    </div>

                    <Link to="/cart">
                      <button
                        className="button"
                        style={{ border: "1px solid black" }}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MyComponent;
