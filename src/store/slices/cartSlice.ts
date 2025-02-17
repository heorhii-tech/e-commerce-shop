"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../share/common/types";
export interface RootState {
    cartState: {
      cart: ProductInfo[];
      totalPrice: number;
    };
  }
interface CartState {
  cart: ProductInfo[];
  totalPrice: number;
}
const initialState: RootState["cartState"] = {
    cart: [],
    totalPrice: 0,
  };
  
  const calculateTotalPrice = (cart: ProductInfo[]) => {
    return cart.reduce(
      (total, item) => total + (Number(item.lastPrice) || 0) * (item.quantity ?? 1),
      0
    );
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<ProductInfo>) => {
        const item = state.cart.find((item) => item.id === action.payload.id);
  
        if (item) {
          item.quantity += 1;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
  
        state.totalPrice = calculateTotalPrice(state.cart);
      },
      increaseQuantity: (state, action: PayloadAction<number>) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
        state.totalPrice = calculateTotalPrice(state.cart);
      },
      decreaseQuantity: (state, action: PayloadAction<number>) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
        state.totalPrice = calculateTotalPrice(state.cart);
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        state.totalPrice = calculateTotalPrice(state.cart);
      },
      setInitialState: (state, action: PayloadAction<CartState>) => {
        state.cart = action.payload.cart;
        state.totalPrice = action.payload.totalPrice;
      },
    },
  });
  
  export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart,setInitialState  } = cartSlice.actions;
  export default cartSlice.reducer;
