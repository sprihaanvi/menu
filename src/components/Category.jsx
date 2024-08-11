import React from "react";
import "../index.css";
import catDetails from "../CatDetails.js";

import { useNavigate } from "react-router-dom";

function createCat(catDetails) {
  return (
    <Types key={catDetails.id} title={catDetails.title} img={catDetails.img} />
  );
}



function Types(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/items");
  };
  return (
    <div class="col-12 col-md-6 col-lg-2 m-4" onClick={handleClick}>
      <img
        style={{ borderRadius: "50%", height: "220px", width: "220px" }}
        src={props.img}
      />
      <p
        style={{
          marginLeft: "3.5rem",
          marginTop: "5px",
          fontSize: "25px",
          fontFamily: "Playfair Display",
          fontWeight: "300",
          fontStyle: "normal",
        }}
      >
        {props.title}
      </p>
    </div>
  );
}
const Category = () => {
  return (
    <>
    <div className="flex justify-content-center">
      <div
        className="ml-5 mt-5"
        style={{
          textAlign: "center",
          fontFamily: "Dancing Script",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Shop by Occassion
      </div>
      <div className="row m-2 justify-content-center category">{catDetails.map(createCat)}</div>
    </div>

    
    </>
  );
};

export default Category;
