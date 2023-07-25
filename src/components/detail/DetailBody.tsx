import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetailBodyProps } from "./_Detail.interface";
import { useAppDispatch } from "../../store/configureStore";
import { setPushCart } from "../../store/modules/cart";

export default function DetailBody({ target }: DetailBodyProps) {
  const [starCount, setStarCount] = useState<number>();
  const checkedObj = Array(10).fill(false);
  const star = target.rating && target.rating.rate;
  const dispatch = useAppDispatch();

  const pushInCart = () => {
    dispatch(setPushCart(target));
  };

  useEffect(() => {
    const decimal = Number((star % 1).toFixed(1));

    decimal < 0.5
      ? setStarCount(Math.floor(star) * 2)
      : setStarCount(Number(Math.floor(star) + 0.5) * 2);
  }, []);

  for (let i = 0; i < checkedObj.length; i++) {
    starCount && i < starCount ? (checkedObj[i] = true) : (checkedObj[i] = false);
  }

  return (
    <div className="detail-body-wrapper">
      <h2 className="detail-body-title">
        {target.title}
        <span className="detail-body-tag">NEW</span>
      </h2>
      <p className="detail-body-description">{target.description}</p>
      <div className="detail-body-review-area">
        <div className="detail-body-review-star-list">
          {checkedObj.map((input, idx) => {
            return (
              <input
                key={idx}
                className="detail-body-review-star"
                type="radio"
                name="rating"
                value=""
                disabled
                checked={input && `checked`}
              ></input>
            );
          })}
        </div>
        <div className="detail-body-review-rating">{`${star} / ${target.rating.count} 참여`}</div>
      </div>
      <p className="detail-body-price">{`$${Math.round(target.price)}`}</p>
      <div className="detail-body-btn-area">
        <button className="detail-body-put-in-cart-btn" onClick={pushInCart}>
          장바구니에 담기
        </button>
        <Link to={"/cart"} className="detail-body-go-to-cart-btn">
          장바구니로 이동
        </Link>
      </div>
    </div>
  );
}
