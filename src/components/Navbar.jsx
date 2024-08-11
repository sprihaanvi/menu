import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./ContextReducer";
const Navbar = () => {
  let data=useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("authToken");
    // setToken(null);
    navigate("/login");
  };
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
            <ul className="navbar-nav me-auto fs-5">
              <li className="nav-item mr-2">
                <Link className="nav-link" aria-current="page" to="/items">
                  Menu
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link" aria-current="page" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item mr-2">
                  <Link className="nav-link" aria-current="page" to="/orders">
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn btn-secondary mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn btn-secondary mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="btn btn-secondary mx-1" to="/cart" style={{backgroundColor:'#282222'}}>
                  Cart {" "}
                  <Badge pill bg="dark" text="white">
                    {data.length}
                  </Badge>
                </Link>

                <Link
                  className="btn btn-secondary mx-1 bg-gradient-warning text-danger"
                  onClick={handleClick}
                  to="/login"
                  style={{backgroundColor:'#282222'}}
                >
                  Logout
                </Link>
              </div>
            )}
            {/* }  */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
