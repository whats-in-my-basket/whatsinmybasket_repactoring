import { CardListProps } from "./_Card.interface";
import Card from "./Card";

export default function CardList({ item }: CardListProps) {
  return (
    <div className="card-list">
      {item?.map((card) => {
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
