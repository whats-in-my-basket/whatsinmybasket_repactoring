import { Link } from "react-router-dom";

export default function HeaderBtn() {
  const CATEGORY_ITEMS = [
    {
      name: "패션",
      url: "/fashion",
    },
    {
      name: "액세서리",
      url: "/accessory",
    },
    {
      name: "디지털",
      url: "/digital",
    },
  ];

  return (
    <>
      {CATEGORY_ITEMS.map((item, index) => {
        return (
          <Link
            to={item.url}
            className="header-common-btn category"
            key={index}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
