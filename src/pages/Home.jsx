import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Caraousel from "../components/Caraousel";
import Category from "../components/Category";
import FlavCat from "../components/FlavCat";
import Collage from "../components/Collage";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
const Home = () => {
  return (
    <div>
      <div style={{ position: "fixed", top: "0px", width: "100%", zIndex: "99900" }}>
        <Navbar />
      </div>
      <div>
        <Caraousel />
      </div>
      <div><Features/></div>
      <div><Testimonials/></div>

      <div className="container">
        <Category />
      </div>
      <div className="container">
        <FlavCat />
      </div>
      <div className="container" style={{marginTop:'3rem',width:'55%',justifyContent: 'center'}}><Collage/></div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
