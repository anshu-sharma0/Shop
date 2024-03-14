import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./catSlice";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="row row-cols-md-4 g-4 ">
        {data &&
          data.map((item) => (
            <div key={item.id} className="col">
              <div className="card " style={{ width: "18rem", height: "100%" }}>
                <div className="card-body">
                  <p className="card-text">{String(item).toUpperCase()}</p>
                  <Link to={`/${String(item).replace(/[ '\s]/g, "")}`}>
                    <button
                      type="button"
                      className="btn btn-sm mb-2"
                      style={{
                        backgroundColor: "#282c34",
                        color: "white",
                        border: "none",
                      }}
                    >
                      go to category
                    </button>
                  </Link>
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyComponent;

