import { useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";
const CartContainer = () => {
  const { amount, cartItems } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません。</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>円</span>
          </h4>
        </div>
        <button className="btn clear-btn">全削除</button>
      </footer>
    </section>
  );
};
export default CartContainer;
