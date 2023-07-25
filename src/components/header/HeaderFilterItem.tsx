import { Link } from "react-router-dom";
import { HeaderFilterItemProps } from "./_Header.interface";

export default function HeaderFilterItem({ item }: HeaderFilterItemProps) {
  return (
    <li>
      <Link
        to={`/detail/${item.id}`}
        className="header-filter-item"
        state={{ category: item.category }}
      >
        {item.title}
      </Link>
    </li>
  );
}
