import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HeaderBasketBtn() {
  return (
    <Link to="/cart" className="header-basket-btn">
      <HiOutlineShoppingBag className="header-basket-btn-img" />
    </Link>
  );
}
