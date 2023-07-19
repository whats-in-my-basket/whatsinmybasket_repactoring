import { FiMenu } from "react-icons/fi";
import { setModalOpen } from "../../store/modules/modal";
import { useAppDispatch } from "../../store/configureStore";

export default function HeaderDrawerBtn() {
  const dispatch = useAppDispatch();

  function drawerOpen() {
    dispatch(setModalOpen());
  }

  return (
    <button onClick={drawerOpen} className="header-drawer-btn">
      <FiMenu className="header-drawer-btn-img" />
    </button>
  );
}
