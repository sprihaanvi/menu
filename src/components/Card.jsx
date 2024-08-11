import React, { useState, useEffect } from "react";
import { useDispatch, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  const navigate = useNavigate();

  let data = useCart(); //since while declaring cart,we are using useContext and it has the value of state, so it will store the state.
  let dispatch = useDispatch();
  const baseWeight = 1;
  const initialSelectedPrice =
    props.PriceRange && props.PriceRange.length > 0
      ? parseFloat(Object.values(props.PriceRange[0])[0])
      : props.price;
  const [selectWeight, setWeight] = useState(baseWeight);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(props.price * 0.5);
  const [selectedPrice, setSelectedPrice] = useState(initialSelectedPrice);

  useEffect(() => {
    setPrice(selectWeight * selectedPrice);
  }, [selectWeight, selectedPrice]);

  const handleWeight = (e) => {
    const weight = parseFloat(e.target.value);
    setWeight(weight);
    setPrice((weight / baseWeight) * selectedPrice);
  };

  const handlePriceRangeChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    setSelectedPrice(newPrice);
    setPrice(selectWeight * newPrice);
  };

  const handleAddtoCart = () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    let flavour = "";
    let food = [];
    setQty(qty + 1);
    for (const item of data) {
      if (item.id === props.Items._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      //aagr already exist krta hai wo item then update.
      if (food.wt === selectWeight) {
        dispatch({
          type: "UPDATE",
          id: props.Items._id,
          price: price,
          wt: selectWeight,
          qty: qty + 1,
        });
        return;
        //agar diifeent weight hai tbto new parameter
      } else if (food.wt !== selectWeight) {
        if (props.PriceRange && props.PriceRange.length > 0) {
          flavour = Object.keys(props.PriceRange[0])[0];
        } else {
          flavour = props.Items.flavour;
        }
        dispatch({
          type: "ADD_TO_CART",
          id: props.Items._id,
          flavour: flavour,
          title: props.Items.Title,
          img: props.Items.img,
          desc: props.Items.Description,
          wt: selectWeight,
          price: price,
          qty: qty + 1,
        });
        return;
      }
      return;
    }
    //else new item added to cart
    if (props.PriceRange && props.PriceRange.length > 0) {
      // If PriceRange is present, use its key as flavour
      flavour = Object.keys(props.PriceRange[0])[0];
    } else {
      // Otherwise, use a default value or handle as needed
      flavour = props.Items.flavour; // Assuming flavour is available in props.Items
    }

    dispatch({
      type: "ADD_TO_CART",
      id: props.Items._id,
      flavour: flavour,
      title: props.Items.Title,
      img: props.Items.img,
      desc: props.Items.Description,
      wt: selectWeight,
      price: price,
      qty: qty + 1,
    });
    console.log(data);
  };

  return (
    <div>
      <div>
        <div
          className="card mt-3 ml-4"
          style={{ width: "18rem", height: "590px", overflow: "hidden" }}
        >
          <img
            src={props.Items.img}
            className="card-img-top"
            style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "fill" }}
            alt="..."
          />
          <div className="card-body mt-auto">
            <h5 className="card-title">{props.Items.Title}</h5>
            <p className="card-text">{props.Items.Description}</p>
            <div className="mt-2 mb-2 p-0 container w-100">
              {props.PriceRange && props.PriceRange.length > 0 ? (
                <div>
                <select
                  className="h-100 w-100"
                  onChange={handlePriceRangeChange}
                >
                  {props.PriceRange[0] &&
                    Object.entries(props.PriceRange[0]).map(([key, value]) => (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    ))}
                </select>
                
                
                <select
                  className="h-100 w-100 mt-2"
                  value={selectWeight}
                  onChange={handleWeight}
                >
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={(i + 1) * 0.5}>
                        {(i + 1) * 0.5} pound
                      </option>
                    );
                  })}
                </select>
                </div>
                
              ) : (
                <select
                  className="h-100 w-100"
                  value={selectWeight}
                  onChange={handleWeight}
                >
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={(i + 1) * 0.5}>
                        {(i + 1) * 0.5} pound
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
            <div className="container px-0">
              <b className="justify-content-start p-0">Total Price: Rs. {price}</b>
            </div>
            <hr />
            <div
              className="flex justify-content-start btn btn-secondary text-white" style={{backgroundColor:'#403939'}}
              onClick={handleAddtoCart}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
