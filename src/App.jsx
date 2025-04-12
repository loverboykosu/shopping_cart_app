import { useState } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
