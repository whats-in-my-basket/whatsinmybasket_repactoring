import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { CardProps } from "./_Card.interface";
import SkeletonComponent from "../common/skeleton/SkeletonComponent";

export default function Card({ title, image, price, id, category }: CardProps) {
  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [isImage, setIsImage] = useState<boolean>(false);
  const [isPrice, setIsPrice] = useState<boolean>(false);

  useEffect(() => {
    title && setIsTitle(true);
    image && setIsImage(true);
    price && setIsPrice(true);
  }, [title, image, price, id]);

  return (
    <Link className="card" to={`/detail/${id}`} state={{ category: category }}>
      <figure className="card-image-area">
        {isImage && (
          <LazyLoad className="card-lazy-load-area">
            <img className="card-image" src={image} loading="lazy"></img>
          </LazyLoad>
        )}
        {!isImage && <SkeletonComponent type="image" />}
      </figure>
      <div className="card-info-area">
        {isTitle && <p className="card-title">{title}</p>}
        {!isTitle && <SkeletonComponent type="title" />}
        {isPrice && <p className="card-price">{`$${Math.round(price)}`}</p>}
        {!isPrice && <SkeletonComponent type="price" />}
      </div>
    </Link>
  );
}
