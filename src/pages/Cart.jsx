import React,{useEffect} from "react";
import { useCart, useDispatch } from "../components/ContextReducer";
import { BsTrash3 } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    const localData = localStorage.getItem('cart');
    if (localData) {
      dispatch({ type: 'LOAD', payload: JSON.parse(localData) });
    }
  }, [dispatch]);

  if (data.length === 0) {
    return (
      <>
      <Navbar/>
      <div className="container" style={{alignItems:'center',marginTop:'20rem'}}>
        
    <div className="d-flex justify-content-center fs-2" style={{fontFamily:'Playfair Display', fontWeight:'bold',textAlign:'center'}}>Oopsie :( <br/>Your cart is Empty! Let's Fill it.</div>
    <div className="d-flex justify-content-center btn btn-outline-light btn-lg text-white w-20" style={{maxWidth:'5rem !important'}}onClick={()=>{navigate('/items')}}>Shop for more!</div>
      </div>
      </>
    )
  }
  let totPrice = data.reduce((total, food) => total + food.price, 0);

  const handleCheckout = async () => {
    let usermail = localStorage.getItem("useremail");
    let response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: usermail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: "EMPTY" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table class="table table-hover table-dark text-white ">
          <thead className="text-white fs-4">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Title</th>
              <th scope="col">Weight</th>
              <th scope="col">Quantity</th>
              <th scope="col">Flavour</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.title}</td>
                  <td>{food.wt}pound</td>
                  <td>{food.qty}</td>
                  <td>{food.flavour}</td>
                  <td>{food.price}</td>
                  <td>
                    <div
                      className="btn btn-red btn-md p-0 m-0"
                      onClick={() => {
                        dispatch({ type: "DELETE", index: index });
                      }}
                    >
                      <BsTrash3 />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Amount: Rs.{totPrice}/-</h1>
        </div>
        <div className="btn btn-secondary mt-5" onClick={handleCheckout}>
          CheckOut
        </div>
      </div>
    </>
  );
}
