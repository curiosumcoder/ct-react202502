import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { CartContext } from "./CartContext";
import IProduct from "./models/IProduct";
import { useState } from "react";

function App() {
  const [items, setItems] = useState<Array<IProduct>>([]);

  const addToCart = (newProduct: IProduct) => {
    console.log(
      `Add product ${newProduct.productName} to global store via context.`
    );

    if (items.findIndex((p) => p.id === newProduct.id) === -1) {
      setItems([newProduct, ...items]);
    }
  };

  const clearCart = () => {
    console.log("Remote products from global store via context");
    setItems([]);
  };

  const removeFromCart = (currentProduct: IProduct) => {
    console.log(
      `Remove product ${currentProduct.productName} to global store via context.`
    );
    setItems(items.filter((p) => p.id !== currentProduct.id));
  };

  return (
    <>
      <CartContext.Provider
        value={{ items, addToCart, clearCart, removeFromCart }}
      >
        <Header />
        <div className="container" style={{ marginTop: "2em" }}>
          <Outlet />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
