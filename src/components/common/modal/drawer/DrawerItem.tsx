import { DrawerItemProps } from "./_Drawer.interface";
import { useAppDispatch } from "../../../../store/configureStore";
import { setModalClose } from "../../../../store/modules/modal";
import { Link } from "react-router-dom";

export default function DrawerItem({ url, name }: DrawerItemProps) {
  const dispatch = useAppDispatch();

  const drawerClose = () => {
    dispatch(setModalClose());
  };

  return (
    <Link to={url} className="drawer-item" onClick={drawerClose}>
      {name}
    </Link>
  );
}
