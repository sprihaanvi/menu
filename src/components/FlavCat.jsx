import React, { useState, useEffect } from "react";
import flavours from "../flavours.js";
import { useNavigate } from "react-router-dom";

function createFlav(flavour) {
  return <Types key={flavour.id} title={flavour.flavour} img={flavour.img} />;
}
function getChunkSize() {
  return window.innerWidth < 768 ? 1 : 4; // Adjust 768 to your mobile breakpoint and 3 to your desktop chunk size
}

function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

function Types(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/items");
  };
  return (
    <div
      className="card"
      style={{ margin: "0.5rem", width: "18rem" }}
      onClick={handleClick}
    >
      <img
        src={props.img}
        style={{ height: "300px", width: "100%", filter: "brightness(1)" }}
        className="card-img-top mt-1"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {props.title}
        </h5>
      </div>
    </div>
  );
}

const FlavCat = () => {
  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rows = chunkArray(flavours, chunkSize);

  return (
    <div  style={{marginTop:'4rem'}}>
      <div
        className="m-0 flex justify-content-center"
        style={{
          textAlign: "center",
          fontFamily: "Dancing Script",
          fontSize: "3rem",
          
        }}
      >
        Shop by Flavour
      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {rows.map((row, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row justify-content-center px-2 m-3">{row.map(createFlav)}</div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default FlavCat;
