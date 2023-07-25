import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <div className="cart-empty-list">
      <h1 className="cart-empty-text">장바구니에 물품이 없습니다.</h1>
      <Link to="/">
        <button className="cart-go-shopping-btn">담으러 가기</button>
      </Link>
    </div>
  );
}
