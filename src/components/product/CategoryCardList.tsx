import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { CardListProps, ProductProps } from "./_Card.interface";

export default function CategoryCardList({ title }: CardListProps) {
  const [items, setItems] = useState<Array<ProductProps>>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response: any) => {
        title === "패션" &&
          setItems(
            response.data.filter(
              (item: any) =>
                item.category === "men's clothing" || item.category === "women's clothing",
            ),
          );
        title === "액세서리" &&
          setItems(response.data.filter((item: any) => item.category === "jewelery"));
        title === "디지털" &&
          setItems(response.data.filter((item: any) => item.category === "electronics"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  return (
    <div className="card-list">
      {items?.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            id={card.id}
            category={card.category}
            price={card.price}
          />
        );
      })}
    </div>
  );
}
