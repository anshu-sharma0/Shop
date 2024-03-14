import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./dataSlice";
import { Link } from "react-router-dom";

function Category() {
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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div>
    //   <div>
    <>
      <h1>Shopping App</h1>

      <Link to="/men">
        <button>Men's Clothing</button>
      </Link>

      <Link to="/women">
        <button>Women's Clothing</button>
      </Link>

      <Link to="/elec">
        <button>Electronics</button>
      </Link>

      <Link to="/jew">
        <button>Jewelery</button>
      </Link>
      {/* <div className="container">
        <div className="row row-cols-md-4 g-4">
          {data.map((item) => (
            <div className="col">
              <div className="card h-30">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/zara-logo-1.svg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{item.id}</p>
                  <Link to="/myComponent">
                    <button className="btn btn-dark"> Go to category</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Category;
