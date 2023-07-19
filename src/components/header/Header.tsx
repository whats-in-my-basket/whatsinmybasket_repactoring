import { useAppSelector } from "../../store/configureStore";
import Portal from "../common/modal/portal/Portal";
import Drawer from "../common/modal/drawer/Drawer";
import HeaderLeftContainer from "./HeaderLeftContainer";
import HeaderRightContainer from "./HeaderRightContainer";

export default function Header() {
  const modalOpen = useAppSelector((state: any) => state.modal.modalOpen);

  return (
    <>
      <header className="header-wrapper">
        <HeaderLeftContainer />
        <HeaderRightContainer />
        {modalOpen && (
          <Portal>
            <Drawer />
          </Portal>
        )}
      </header>
    </>
  );
}
