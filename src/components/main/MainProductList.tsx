import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../product/CardList";
import { ProductProps } from "../product/_Card.interface";

export default function MainProductList() {
  const [products, setProducts] = useState<Array<ProductProps>>();

  const fashion =
    products &&
    products
      .filter(
        (item) =>
          item.category === "men's clothing" ||
          item.category === "women's clothing",
      )
      .slice(0, 4);

  const accessory =
    products &&
    products.filter((item) => item.category === "jewelery").slice(0, 4);

  const digital =
    products &&
    products.filter((item) => item.category === "electronics").slice(0, 4);

  const ITEM_LIST = [
    { title: "패션", item: fashion },
    { title: "액세서리", item: accessory },
    { title: "디지털", item: digital },
  ];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response: any) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(fashion, accessory, digital);

  return (
    <div className="main-product-list-wrapper">
      {ITEM_LIST.map((item, index) => {
        return (
          <div className="main-product-list-container" key={index}>
            <h2 className="product-title">{item.title}</h2>
            <CardList item={item.item} />
          </div>
        );
      })}
    </div>
  );
}
