import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch } from "../../../../store/configureStore";
import { setModalClose } from "../../../../store/modules/modal";
import DrawerItem from "./DrawerItem";
import { IoClose } from "react-icons/io5";

export default function Drawer() {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxDeviceWidth: 620 });

  const DRAWER_ITEMS = [
    {
      name: "패션",
      url: "/fashion",
    },
    {
      name: "액세서리",
      url: "/accessory",
    },
    {
      name: "디지털",
      url: "/digital",
    },
  ];

  const drawerClose = () => {
    dispatch(setModalClose());
  };

  const drawerOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      drawerClose();
    }
  };

  return (
    <div
      className="modal-background"
      ref={modalRef}
      onClick={(e) => drawerOutSideClick(e)}
    >
      <ul className="drawer-wrapper">
        {DRAWER_ITEMS.map((item, index) => {
          return <DrawerItem url={item.url} name={item.name} key={index} />;
        })}
        <button onClick={drawerClose}>
          {isMobile && <IoClose className="close-btn" />}
        </button>
      </ul>
    </div>
  );
}
