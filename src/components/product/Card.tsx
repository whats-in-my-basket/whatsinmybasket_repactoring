import { Link } from "react-router-dom";
import { ProductProps } from "./_Card.interface";

export default function Card({ title, image, price, id }: ProductProps) {
  return (
    <Link className="card" to={`/product/${id}`}>
      <figure>
        <img className="card-image" src={`${image}`}></img>
      </figure>
      <div className="card-info-area">
        <p className="card-title">{title}</p>
        <p className="card-price">{`$${Math.round(price)}`}</p>
      </div>
    </Link>
  );
}
