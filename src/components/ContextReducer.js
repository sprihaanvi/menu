import React, { createContext, useReducer,useContext } from "react";

const CartState = createContext();
const CartDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newState = [
        ...state,
        {
          id: action.id,
          title: action.title,
          img: action.img,
          desc: action.desc,
          flavour: action.flavour,
          wt: action.wt,
          price: action.price,
          qty: action.qty,
        },
      ];
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    case "DELETE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      localStorage.setItem('cart', JSON.stringify(newArr));
      return newArr;
    case "UPDATE":
      const arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          console.log(food.wt, action.wt, action.price + food.price);
          arr[index] = {
            ...food,
            wt: action.wt,
            price: action.price + food.price,
            qty: action.qty + 1,
          };
        }
      });
      localStorage.setItem('cart', JSON.stringify(arr));
      return arr;
    case "EMPTY":
      localStorage.setItem('cart', JSON.stringify([]));
      return [];
    case "LOAD":
      return action.payload;
    default:
      console.log("error in dispatch");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  return (
    <CartDispatch.Provider value={dispatch}>
      <CartState.Provider value={state}>{children}</CartState.Provider>
    </CartDispatch.Provider>
  );
};

export const useCart = () => useContext(CartState);
export const useDispatch = () => useContext(CartDispatch);
