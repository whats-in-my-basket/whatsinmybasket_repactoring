import MainCardList from "./MainCardList";

export default function MainProductList() {
  const TITLE_LIST = ["패션", "액세서리", "디지털"];

  return (
    <div className="main-product-list-wrapper">
      {TITLE_LIST.map((title, index) => {
        return (
          <div className="main-product-list-container" key={index}>
            <h2 className="product-title">{title}</h2>
            <MainCardList title={title} />
          </div>
        );
      })}
    </div>
  );
}
