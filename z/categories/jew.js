import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../dataSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { increment } from "./cart";

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [expandedIds, setExpandedIds] = useState([]);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const toggleDescriptionExpansion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div className="d-flex justify-content-sm-between">
        <h1>Jewelery Section</h1>

        <span className="span">{count}</span>
      </div>
      <div className="row row-cols-md-4 g-4">
        {data &&
          data
            .filter((item) => item.category === "jewelery")
            .map((item) => (
              <div key={item.id} className="col cards">
                <div
                  className="card border-light"
                  style={{ width: "16rem", height: "100%" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                    style={{ objectFit: "contain", height: "200px" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: "1rem" }}>
                      {item.title}
                    </h4>
                    <h5 className="font-weight-bold text-success">
                      $ {item.price}
                    </h5>
                    <p
                      className="card-text text-muted"
                      style={{
                        fontSize: "0.8rem",
                        whiteSpace: expandedIds.includes(item.id)
                          ? "normal"
                          : "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => toggleDescriptionExpansion(item.id)}
                    >
                      {item.description}
                    </p>
                    <h5>Rating: {item.rating.rate}</h5>
                  </div>
                  <div className="btn">
                    <button onClick={() => dispatch(increment())}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default MyComponent;
