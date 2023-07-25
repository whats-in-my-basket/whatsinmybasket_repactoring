import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/configureStore";
import { setCountMinus, setCountPlus, setDeleteCart } from "../../store/modules/cart";
import { IoClose } from "react-icons/io5";
import { CartItemProps } from "./_Cart.interface";

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const deleteInCart = () => {
    dispatch(setDeleteCart(item.id));
  };

  const handleCountMinus = () => {
    dispatch(setCountMinus(item.id));
  };
  const handleCountPlus = () => {
    dispatch(setCountPlus(item.id));
  };

  return (
    <div className="cart-card-area">
      <Link className="cart-image-area" to={`/product/`}>
        <figure>
          <img className="cart-image" src={item.image}></img>
        </figure>
      </Link>
      <div className="cart-info-area">
        <div className="cart-info-group">
          <div className="cart-info-title-group">
            <p className="cart-info-title">{item.title}</p>
            <IoClose className="cart-info-close-btn" onClick={deleteInCart} />
          </div>
          <p className="cart-info-price">{`$${Math.round(item.price)}`}</p>
        </div>
        <div className="cart-info-btn-group">
          <button
            onClick={handleCountMinus}
            className="cart-info-delete-btn"
            disabled={item.count === 1 && true}
          >
            -
          </button>
          <button className="cart-info-count-item">{item.count}</button>
          <button onClick={handleCountPlus} className="cart-info-add-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
