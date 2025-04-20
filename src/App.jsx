import { useState } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
