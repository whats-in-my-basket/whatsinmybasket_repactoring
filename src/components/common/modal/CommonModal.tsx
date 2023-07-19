import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modules/modal";
import { HiOutlineX } from "react-icons/hi";

export default function DrawerOpenModal() {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const modalClose = () => {
    dispatch(setModalClose());
  };

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      modalClose();
    }
  };

  return (
    <div
      className="modal-background"
      ref={modalRef}
      onClick={(e) => modalOutSideClick(e)}
    >
      <div className="modal-container">
        <div className="modal-wrapper">
          <button className="close-modal-btn" onClick={modalClose}>
            <HiOutlineX className="close-modal-btn-icon" />
          </button>
          <div className="modal-contents">인증 번호가 전송되었습니다.</div>
        </div>
      </div>
    </div>
  );
}
