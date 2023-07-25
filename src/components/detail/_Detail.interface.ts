export interface DetailBodyProps {
  target: DetailProductProps;
}

export interface DetailProductProps {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: DetailRatingProps;
}

export interface DetailRatingProps {
  rate: number;
  count: number;
}
