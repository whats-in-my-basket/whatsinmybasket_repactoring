export interface MainCarouselItemProps {
  selected: boolean;
  item: CarouselItemProps;
}

export interface CarouselItemProps {
  title: string;
  desc: string;
  id: number;
  url: string;
  image: string;
}
