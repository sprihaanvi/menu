import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

//to send data inside card : endpoint call,endpoint ka dtaa props me send to card, then card displays data.

export default function Items() {
  const[search,setSearch]=useState("");
  const [foodCat, setCat] = useState([]);
  const [fooditem, setItem] = useState([]);

  const inputData = async () => {
    let response = await fetch("http://localhost:5000/api/cakemenu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setItem(response[0]);
    setCat(response[1]);
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value);
  }
  //on first render/load jo bhi functions honge useEff k andar wo call hojaynege.
  useEffect(() => {
    inputData();
  }, []);

  return (
    <div>
      <Navbar />
      
      <div className="container">
        <div className="d-flex ml-2 justify-content-center" style={{ borderRadius: "18px" }}>
          <input
            className="form-control-sm me-1 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{width:'420px',height:'40px'}}
            value={search}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-secondary" type="submit" >
            Search
          </button>
        </div>
        {/* foodCat call hoone k baad, will call food items jo filter krega based on the category name and display krayega */}
        {foodCat !== []
          ? foodCat.map((item, key) => {
              return (
                <div className="row mb-2">
                  <div
                    key={item._id}
                    className="fs-2 m-3"
                    style={{
                      fontFamily: "Dancing Script",
                      fontWeight: "bolder",
                    }}
                  >
                    {item.Category}
                  </div>
                  <hr />
                  {fooditem !== [] ? (
                    fooditem
                      .filter((data) => (data.category === item.Category) && (data.Title.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3 m-4"
                          >
                            <Card
                              Items={filterItems}
                              // title={filterItems.Title}
                              // desc={filterItems.Description}
                              // img={filterItems.img}
                              price={filterItems.Price}
                              PriceRange={filterItems.PriceRange}
                              
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
