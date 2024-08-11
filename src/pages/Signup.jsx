import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://menu-backend-86pz.onrender.com/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        phoneNumber: details.phoneNumber,
        address: details.address,
      }),
    });
    const jsondata = await response.json();
    console.log(jsondata);
    //agar backend se jsondata me success false aata hai to alert.
    if (!jsondata.success) {
      alert("Please enter valid details.");
    }
    if (jsondata.success) {
      toast.success("User created successfully");
      // alert("User created successfully.")
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      {/* <div className="container flex align-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="exampleInputname" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control "
              id="exampleInputname"
              aria-describedby="nameHelp"
              name="name"
              value={details.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPhoneNumber1" className="form-label">
              Phone Number
            </label>
            <input
              type="PhoneNumber"
              className="form-control"
              id="exampleInputPhoneNumber1"
              aria-describedby="PhoneNumberHelp"
              name="phoneNumber"
              value={details.phoneNumber}
              onChange={handleChange}
            />
            <div id="PhoneNumberHelp" className="form-text">
              We'll keep your Phone number a secret.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={details.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputAddress1" className="form-label">
              Address
            </label>
            <input
              type="Address"
              className="form-control"
              id="exampleInputAddress1"
              aria-describedby="AddressHelp"
              name="address"
              value={details.address}
              onChange={handleChange}
            />
            <div id="AddressHelp" className="form-text">
              Your address such encompass House Number,Apartment/Street
              name,Area,Landmark and Pincode.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={details.password}
              onChange={handleChange}
            />
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 6-20 characters long, contain letters and
              <br />
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-secondary">
            Already a user?
          </Link>
        </form>
      </div> */}
      <div className="container" style={{ marginTop: "4rem" }}>
        <div
          className="card justify-content-space-between m-5 mt-5"
          style={{ maxWidth: "95%" }}
        >
          <div className="row g-0">
            <div className="col-md-4 mb-0">
              <img
                src="tier.png"
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
                  Sign In with Us!
                </h5>
                <div
                  className="container mt-2"
                  style={{ fontFamily: "PlayFair Display", fontSize: "1rem" }}
                >
                  <div className="row">
                    <div className="col m-2">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputname"
                            className="form-label"
                          >
                            Name
                          </label>
                          <input
                            type="name"
                            className="form-control "
                            id="exampleInputname"
                            aria-describedby="nameHelp"
                            name="name"
                            value={details.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputPhoneNumber1"
                            className="form-label"
                          >
                            Phone Number
                          </label>
                          <input
                            type="PhoneNumber"
                            className="form-control"
                            id="exampleInputPhoneNumber1"
                            aria-describedby="PhoneNumberHelp"
                            name="phoneNumber"
                            value={details.phoneNumber}
                            onChange={handleChange}
                          />
                          <div id="PhoneNumberHelp" className="form-text">
                            We'll keep your Phone number a secret.
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={details.email}
                            onChange={handleChange}
                          />
                          <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputAddress1"
                            className="form-label"
                          >
                            Address
                          </label>
                          <input
                            type="Address"
                            className="form-control"
                            id="exampleInputAddress1"
                            aria-describedby="AddressHelp"
                            name="address"
                            value={details.address}
                            onChange={handleChange}
                          />
                          <div id="AddressHelp" className="form-text">
                            Your address such encompass House
                            Number,Apartment/Street name,Area,Landmark and
                            Pincode.
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={details.password}
                            onChange={handleChange}
                          />
                          <div id="passwordHelpBlock" class="form-text">
                            Your password must be 6-20 characters long, contain
                            letters and
                            numbers, and must not contain spaces, special
                            characters, or emoji.
                          </div>
                        </div>

                        <div className="container ms-0 ps-0">
                          <div className="align-items-center justify-content-start">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <Link to="/login" className="m-3 btn btn-secondary">
                              Already a user?
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
    </>
  );
}
