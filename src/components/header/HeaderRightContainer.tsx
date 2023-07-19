import { useMediaQuery } from "react-responsive";

import HeaderModeToggle from "./HeaderModeToggle ";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderBasketBtn from "./HeaderBasketBtn";
import HeaderSearchAtMobile from "./HeaderSearchAtMobile";

export default function HeaderRightContainer() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 620 });

  return (
    <div className="header-container">
      <HeaderModeToggle />
      {!isMobile ? <HeaderSearchBar /> : <HeaderSearchAtMobile />}
      <HeaderBasketBtn />
    </div>
  );
}
