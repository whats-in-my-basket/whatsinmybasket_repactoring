import CartList from "../components/cart/CartList";
import CommonWrapper from "../components/common/CommonWrapper";
import Logger from "../components/common/Logger";
import { useAppSelector } from "../store/configureStore";
import Portal from "../components/common/modal/portal/Portal";
import BuyConfirmModal from "../components/common/modal/BuyConfirmModal";

export default function Cart() {
  const modalOpen = useAppSelector((state: any) => state.cartModal.modalOpen);
  return (
    <CommonWrapper>
      <div className="cart-wrapper">
        <Logger start="홈" end="장바구니" />
        <CartList />
      </div>
      {modalOpen ? (
        <Portal>
          <BuyConfirmModal />
        </Portal>
      ) : null}
    </CommonWrapper>
  );
}
