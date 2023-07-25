import { useEffect, useState } from "react";
import Card from "../product/Card";
import { CardListProps, ProductProps } from "../product/_Card.interface";
import { getCategoryCardList } from "../../api/api";

export default function CategoryCardList({ title }: CardListProps) {
  const [items, setItems] = useState<Array<ProductProps>>();

  useEffect(() => {
    getCategoryCardList(title).then((response: any) => setItems(response));
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
