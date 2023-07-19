import { useMediaQuery } from "react-responsive";
import HeaderDrawerBtn from "./HeaderDrawerBtn";
import HeaderBtn from "./HeaderBtn";
import HeaderTitle from "./HeaderTitle";

export default function HeaderLeftContainer() {
  const isPadOrDesktop = useMediaQuery({ minDeviceWidth: 840 });
  const isMobileOrPad = useMediaQuery({ maxDeviceWidth: 1024 });

  return (
    <div className="header-container">
      {isMobileOrPad && <HeaderDrawerBtn />}
      <HeaderTitle />
      {isPadOrDesktop && <HeaderBtn />}
    </div>
  );
}
