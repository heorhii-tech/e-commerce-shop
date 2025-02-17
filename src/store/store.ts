"use client"
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import type { ProductInfo } from "../share/common/types";

export interface RootState {
    cartState: {
      cart: ProductInfo[];
      totalPrice: number;
    };
  }



const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.cartState);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Ошибка сохранения в localStorage", error);
  }
};



const store = configureStore({
  reducer: {
    cartState: cartSlice,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export default store;