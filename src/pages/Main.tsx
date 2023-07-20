import CommonWrapper from "../components/common/CommonWrapper";
import MainCarouselArea from "../components/main/MainCarouselArea";
import MainProductList from "../components/main/MainProductList";

export default function Main() {
  return (
    <CommonWrapper>
      <MainCarouselArea />
      <MainProductList />
    </CommonWrapper>
  );
}
