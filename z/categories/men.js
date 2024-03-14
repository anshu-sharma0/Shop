import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../dataSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
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


  return (
    <div>
      <h1>Mens's Clothing</h1>
      <div className="row row-cols-md-4 g-4">
        {data &&
          data
            .filter((item) => item.category === "men's clothing")
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
                    <h5 className="card-title" style={{ fontSize: "1rem" }}>
                      {item.title}
                    </h5>
                    <p className="font-weight-bold text-success">
                      $ {item.price}
                    </p>
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
                  </div>
                  <div className="btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default MyComponent;
