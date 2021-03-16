import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const AddInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id == item.id;

      if (isAlreadyAdded !== -1) {
        return toast("already present in the cart", { type: "error" });
      }
    });

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleitem) => singleitem.id !== item.id));
    toast("Item removed", {type:"info"})
  };
  return (
    <div className="App">
      <BuyPage AddInCart={AddInCart}/>
    </div>
  );
}

export default App;
