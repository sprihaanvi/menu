import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/thefoodies_delight/";
  };
  
  const handleFbClick = () => {
    window.location.href = "https://www.facebook.com/thefoodiesdelightranchi/";
  };

  return (
    <div>
      <div className="container w-100 mt-4">
        <footer
          className="d-flex flex-column align-items-center w-100 border-top"
          style={{ backgroundColor: 'rgb(32 32 32)' }}
        >
          <div className="d-flex flex-column align-items-center">
            <span className="mb-2 text-muted mt-2">© The Foodies Delight</span>
            <div className="d-flex justify-content-center align-items-center my-2">
              <button
                className="insta me-3 text-muted"
                onClick={handleInstagramClick}
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                <FaInstagram size={24} />
              </button>
              <button
                className="insta me-3 text-muted"
                onClick={handleFbClick}
                style={{ background: 'none', border: 'none', padding: 0 }}
                
              >
                <FaFacebook size={24} />
              </button>
                
              
            </div>
            <span className="text-muted my-2">Contact Us: (+91) 7903867381</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
