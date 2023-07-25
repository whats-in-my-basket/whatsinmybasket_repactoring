import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/configureStore";

export default function HeaderBasketBtn() {
  const cartItem = useAppSelector((state: any) => state.cart);
  const count = cartItem.length;

  return (
    <Link to="/cart" className="header-basket-btn">
      <HiOutlineShoppingBag className="header-basket-btn-img" />
      <span className="count">{count}</span>
    </Link>
  );
}
