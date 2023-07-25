export interface CartItemProps {
  item: CartProductProps;
}

export interface CartProductProps {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  count: number;
}
