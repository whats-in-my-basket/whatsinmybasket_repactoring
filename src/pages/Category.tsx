import { useEffect, useState } from "react";
import CommonWrapper from "../components/common/CommonWrapper";
import { useParams } from "react-router";
import Logger from "../components/common/Logger";
import CategoryList from "../components/category/CategoryList";

export default function Category() {
  const [title, setTitle] = useState<string>();
  const { category } = useParams();

  useEffect(() => {
    if (category === "fashion") {
      setTitle("패션");
    } else if (category === "accessory") {
      setTitle("액세서리");
    } else if (category === "digital") {
      setTitle("디지털");
    }
  }, [category]);

  return (
    <CommonWrapper>
      <div className="category-wrapper">
        <Logger start="홈" end={title} />
        <CategoryList title={title} />
      </div>
    </CommonWrapper>
  );
}
