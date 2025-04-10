import { useSelector } from "react-redux";
import { CartIcon, PlusIcon, MinusIcon } from "../HeroIcons";
const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);
  return (
    <nav>
      <div className="nav-center">Navbar</div>
      <h3>Redux Shopping</h3>
      <div className="nav-container">
        <CartIcon />
        <PlusIcon />
        <MinusIcon />
      </div>
      <div className="amount-container">
        <p className="total-amount">{amount}</p>
      </div>
    </nav>
  );
};

export default Navbar;
