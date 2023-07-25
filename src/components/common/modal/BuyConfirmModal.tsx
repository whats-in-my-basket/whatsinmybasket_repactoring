import { useRef } from "react";
import { useAppDispatch } from "../../../store/configureStore";
import { setModalClose } from "../../../store/modules/cartModal";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router";
import { setResetCart } from "../../../store/modules/cart";

export default function BuyConfirmModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const modalClose = () => {
    dispatch(setModalClose());
  };

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      modalClose();
    }
  };

  const resetAllCart = () => {
    modalClose();
    navigate("/");
    dispatch(setResetCart());
  };

  return (
    <div className="modal-background" ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
      <div className="modal-container">
        <div className="modal-wrapper">
          <button className="modal-close-btn" onClick={modalClose}>
            <HiOutlineX className="modal-close-btn-icon" />
          </button>
          <div className="modal-contents">
            <h2 className="modal-contents-title">정말로 구매하시겠습니까?</h2>
            <p className="modal-contents-desc">장바구니의 모든 상품들이 삭제됩니다.</p>
          </div>
          <button className="modal-ok-btn" onClick={resetAllCart}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
