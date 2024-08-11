import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [deets, setdeets] = useState({ email: "", password: "" });

  // const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: deets.email, password: deets.password }),
    });
    const jsondata = await response.json();
    console.log(jsondata);
    if (!jsondata.success) {
      alert("Please enter valid details.");
    }
    if (jsondata.success) {
      // alert("User logged in successfully.");
      // setShowModal(true);
      toast.success("User logged in Successfully!");
      localStorage.setItem("useremail", deets.email);
      localStorage.setItem("authToken", jsondata.authToken);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setdeets({ ...deets, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "4rem" }}>
        <div
          className="card justify-content-space-between m-5 mt-5"
          style={{ maxWidth: "95%" }}
        >
          <div className="row g-0">
            <div className="col-md-4 mb-1">
              <img
                src="baker.png"
                className="img-fluid h-100 rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title "
                  style={{
                    fontFamily: "Dancing Script",
                    fontStyle: "bold",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  Login With Us!
                </h5>
                <div
                  className="container mt-2"
                  style={{ fontFamily: "PlayFair Display", fontSize: "1rem" }}
                >
                  <div className="row">
                    <div className="col m-2">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="email"
                            value={deets.email}
                            onChange={handleChange}
                          />

                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            We'll never share your email with anyone else.
                          </small>
                        </div>
                        <br />
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            value={deets.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>

                        <div className="container ms-0 ps-0">
                          <div className="align-items-center justify-content-start">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <Link
                              to="/signup"
                              className="m-3 btn btn-secondary"
                            >
                              New User?
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <InfoModal show={showModal} onHide={() => setShowModal(false)} /> */}
    </>
  );
}
