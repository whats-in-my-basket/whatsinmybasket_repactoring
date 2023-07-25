import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { CartProductProps } from "./_Cart.interface";
import CartEmpty from "./CartEmpty";
import { setModalOpen } from "../../store/modules/cartModal";

export default function CartList() {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state: any) => state.cart);
  const [total, setTotal] = useState<number>(0);

  const buyCartItem = () => {
    dispatch(setModalOpen());
  };

  useEffect(() => {
    let total = 0;
    cartItem.forEach((item: any) => {
      total += item.count * Math.round(item.price);
    });
    setTotal(total);
  }, [cartItem]);

  console.log(cartItem);
  return (
    <div className="cart-container">
      <div className="cart-card-list">
        {cartItem.map((item: CartProductProps) => {
          return <CartItem key={item.id} item={item} />;
        })}
        {cartItem.length === 0 && <CartEmpty />}
      </div>
      <div className="cart-total-list">
        <div className="cart-total-area">
          <span className="cart-total-text">{`총 : $${total}`}</span>
          <button className="cart-total-buy-btn" onClick={buyCartItem}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
