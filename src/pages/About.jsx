import React from "react";
import { Helmet } from "react-helmet";
import "./styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Meet Shalini(Rini), a passionate home baker and former homemaker. She is known for her delicious and creative baked goods, made with fresh, high-quality ingredients. Shalini loves to share her love of baking with others, and she is always experimenting with new recipes"
        />
        <meta
          name="keywords"
          content="Ranchi homebaker,ranchi cakes,ranchi,doranda homebaker,sateliite homebaker,meccon homebaker,fresh ingredients,experienced,cakes,fresh cake in ranchi"
        />
        <meta name="author" content="Shalini" />
      </Helmet>
      <div className="container justify-content-center">
      <div className="container mt-4 mb-4">
        <div
          className="flex justify-content-center card text-white bg-dark m-3"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="bakermom.png"
                className="img-fluid rounded-start"
                alt="Bakermom"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "Dancing Script",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  About Us
                </h5>
                <p
                  style={{ fontFamily: "Playfair Display" ,fontSize:'1.5rem'}}
                  className="card-text"
                >
                  <b>The Foodies Delight</b> is a home bakery started by <b>Shalini(Rini) </b>
                  in Ranchi.{" "}
                  <br /> Shalini's fascination with bakery items started when
                  she was a teenager, and she continued to bake for her family
                  and friends even after becoming a homemaker.
                  <br />
                  In 2020, during the lockdown, Shalini decided to turn her
                  passion into a business. She started Foodies Delight with the
                  goal of providing her customers with delicious, homemade baked
                  goods that are free of chemicals and made with the freshest
                  ingredients.
                  <br />
                  Shalini takes great pride in her baking, and every item is
                  handcrafted to perfection. She uses only the finest
                  ingredients and traditional baking methods to create cakes,
                  cookies, pastries, and other treats that are sure to tantalize
                  your taste buds.
                  <br />
                  At Foodies Delight, you can be sure that you are getting the
                  best possible quality baked goods.
                  <br /> Everything is made fresh to order, and Shalini is
                  always happy to customize her creations to meet your specific
                  needs.Shalini is known for her attention to detail and her
                  commitment to quality.
                  <br />
                  <br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div
          className="flex justify-content-center card text-white bg-dark m-3"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "Dancing Script",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  Why choose The Foodies Delight?
                </h5>
                <p className="card-text" style={{ fontFamily: "Playfair Display",fontSize:'1.5rem'}}>
                  <br />
                 <b> Fresh, homemade baked goods:</b>
                 <br />All of the baked goods at The
                  Foodies Delight are made fresh to order using only the finest
                  ingredients.
                  <br />
                  <b>Free of chemicals: </b>
                  <br/>Shalini's baked goods are free of chemicals
                  and artificial preservatives.
                  <br />
                 <b> Handcrafted to perfection: </b>
                 <br/>Shalini takes great pride in her
                  baking, and every item is handcrafted to perfection.
                  <br />
                  <b>Amazing taste: </b>
                  <br/>The baked goods at Foodies Delight are simply
                  delicious!
                  <br />
                  <b>Customisable according to your needs.</b>
                  <br/>Be it eggless, vegan or keto cakes. We can customise the cakes just the way you like it.
                  <br />
                  <b>
                    <br/>
                  If you are looking for delicious, homemade baked goods that
                  are made with love and acoording to your taste buds, The Foodies Delight is the perfect place for you!</b>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="bakery.png" className="img-fluid rounded-start" alt="cakehand" style={{ width: "100%", height: "100%" }}/>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default About;
