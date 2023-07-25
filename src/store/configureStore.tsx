import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import modal from "./modules/modal";
import cart from "./modules/cart";
import cartModal from "./modules/cartModal";

const reducers = combineReducers({
  modal: modal,
  cartModal: cartModal,
  cart: cart,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
