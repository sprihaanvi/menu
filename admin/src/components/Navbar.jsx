import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  
  return (
    <div>
      <nav
        style={{ backgroundColor: "rgb(33 31 31)" }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            The Foodies Delight
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse fs-6 justify-content-end"
            id="navbarNav"
          >
            
            {/* }  */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
