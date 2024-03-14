import React, { useEffect, useState } from "react";
import "./MyComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
      <div className="container-fluid">
        <h1>Shopping App</h1>
        {/* <button
          className="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-none d-sm-block col-3"></ul>

          <ul className="navbar-nav col-sm-1"></ul>
          <Link to="/cart">
            <button className="" type="submit">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
