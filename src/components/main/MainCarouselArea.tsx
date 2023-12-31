import { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import MainCarouselItem from "./MainCarouselItem";
import fashionImage from "../../assets/image/fashion-image.jpg";
import fashionImageWebp from "../../assets/image/fashion-image.webp";
import accessoryImage from "../../assets/image/accessory-image.jpg";
import accessoryImageWebp from "../../assets/image/accessory-image.webp";
import digitalImage from "../../assets/image/digital-image.jpg";
import digitalImageWebp from "../../assets/image/digital-image.webp";

export default function MainCarouselArea() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const items = [
    {
      title: "물빠진 청바지",
      desc: "이제 막 도착한 패션 청바지를 구경해보세요.",
      id: 1,
      url: "/fashion",
      image: fashionImage,
      imageWebp: fashionImageWebp,
    },
    {
      title: "신속한 업무처리!",
      desc: "다양한 디지털 상품을 둘러보세요.",
      id: 2,
      url: "/digital",
      image: digitalImage,
      imageWebp: digitalImageWebp,
    },
    {
      title: "신선한 식품",
      desc: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
      id: 3,
      url: "/accessory",
      image: accessoryImage,
      imageWebp: accessoryImageWebp,
    },
  ];

  const prevSildeShow = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSildeShow = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleResize = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="carousel-wrapper">
      <button className="carousel-prev-btn" onClick={prevSildeShow}>
        <IoMdArrowDropleft />
      </button>
      <button className="carousel-next-btn" onClick={nextSildeShow}>
        <IoMdArrowDropright />
      </button>

      <ul
        className="carousel-slide-list"
        style={{ transform: `translate3d(-${width * index}px, 0, 0)` }}
      >
        {items.map((item, idx) => {
          return (
            <MainCarouselItem selected={index == idx ? true : false} key={item.id} item={item} />
          );
        })}
      </ul>
    </div>
  );
}
