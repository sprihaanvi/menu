import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyOrders() {
  const [orderData, setOrderData] = useState(null);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("useremail"));
    const response = await fetch("http://localhost:5000/api/myorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("useremail"),
      }),
    });

    const data = await response.json();
    setOrderData(data.orderData);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData ? (
            orderData.order_data.map((orderArray, index) => (
              <React.Fragment key={index}>
                {orderArray.map((item, idx) => (
                  <div key={idx}>
                    {item.order_date ? (
                      <div className="row m-auto mt-5">
                        {item.order_date}
                        <hr />
                      </div>
                    ) : (
                      <div className="col-12 col-md-6 col-lg-2 m-4" style={{fontFamily:'Playfair Display'}}>
                        <div
                          className="card mt-4"
                          style={{
                            width: "16rem",
                            maxHeight: "700px",
                          }}
                        >
                          <img
                            src={item.img}
                            className="card-img-top"
                            alt={item.title}
                            style={{
                              height: "280px",
                              objectFit: "fill",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <div
                              className="container w-100 p-0"
                              style={{ height: "100px" }}
                            >
                              <span className="m-1"><b>Quantity:</b> {item.qty}</span>
                              <br/>
                              <span className="m-1"><b>Flavour: </b>{item.flavour}</span>
                              <br/>
                              <span className="m-1"><b>Weight: </b>{item.wt} pound</span>
                              <br/>
                              <div className="d-inline ms-1 h-100 w-20 fs-6">
                                <b>Total Amount : </b>
                                ₹{item.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
