import { Link } from "react-router-dom";
import { MainCarouselItemProps } from "./_Main.interface";
import { useMediaQuery } from "react-responsive";

export default function MainCarouselItem({
  selected,
  item,
}: MainCarouselItemProps) {
  const isDesktop = useMediaQuery({ minDeviceWidth: "1024px" });
  return (
    <>
      <li className={selected ? "carousel-slide selected" : "carousel-slide"}>
        <img className="carousel-slide-image" src={item.image}></img>
        <div
          className="carousel-info-area"
          style={
            isDesktop
              ? { minWidth: "1025px" }
              : { width: document.documentElement.clientWidth }
          }
        >
          <div className="carousel-info-background-area">
            <h2 className="carousel-info-title">{item.title}</h2>
            <p className="carousel-info-desc">{item.desc}</p>
            <Link className="carousel-info-url-btn" to={`${item.url}`}>
              바로가기
              <img
                src="https://img.icons8.com/ios-glyphs/30/a6adba/arrow.png"
                className="carousel-info-url-image"
              />
            </Link>
          </div>
        </div>
      </li>
    </>
  );
}
