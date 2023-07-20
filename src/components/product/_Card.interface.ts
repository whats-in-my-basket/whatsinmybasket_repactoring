export interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface CardListProps {
  item: ProductProps[] | undefined;
}
