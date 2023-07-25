import CategoryCardList from "./CategoryCardList";
import { CategoryListProps } from "./_Category.interface";

export default function CategoryList({ title }: CategoryListProps) {
  return (
    <div className="category-container">
      <h2 className="product-title">{title}</h2>
      {title && <CategoryCardList title={title} />}
    </div>
  );
}
