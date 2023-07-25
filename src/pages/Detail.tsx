import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import Logger from "../components/common/Logger";
import CommonWrapper from "../components/common/CommonWrapper";
import DetailBody from "../components/detail/DetailBody";
import { DetailProductProps } from "../components/detail/_Detail.interface";

export default function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const category = location.state.category;
  const [title, setTitle] = useState<string>();
  const [target, setTarget] = useState<DetailProductProps>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setTarget(response.data.filter((item: any) => item.id === Number(id))[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    category === "men's clothing" && setTitle("패션");
    category === "women's clothing" && setTitle("패션");
    category === "jewelery" && setTitle("액세서리");
    category === "electronics" && setTitle("디지털");
  });

  return (
    <CommonWrapper>
      <div className="detail-wrapper">
        {title && target && <Logger start={title} end={target.title} />}
        <div className="detail-container">
          <figure className="detail-image-area">
            {target && <img className="detail-image" src={target.image}></img>}
          </figure>
          {target && <DetailBody target={target} />}
        </div>
      </div>
    </CommonWrapper>
  );
}
