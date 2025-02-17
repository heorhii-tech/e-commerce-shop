"use client";
import CartProduct from "@/components/sections/CartProduct";
import Title from "@/components/sections/Title";
import { CartConfig } from "@/share/common/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Separator } from "@/components/ui/separator";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "@/store/slices/cartSlice";

const Cart = ({ config }: { config: CartConfig }) => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const cartState = useSelector((state: RootState) => state.cartState);
  const { title, product, summary } = config;

  const { cart, totalPrice } = cartState;

  useEffect(() => {
    const storedState = localStorage.getItem("cartState");
    if (storedState) {
      dispatch(setInitialState(JSON.parse(storedState)));
    }
    setIsMounted(true);
  }, [dispatch]);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="cart">
       {cart.length > 0 ? (
        <Title text={title} extraClass="cart__title container" />
       ) : null}
      <div className="container cart-wrapper">
       
        {cart.length > 0 ? (
          <>
            <div className="cart__products">
              {cart.map((item) => (
                <div key={item.id}>
                  <CartProduct product={product} config={item} />
                  {cart.length > 1 && item.id !== cart[cart.length - 1].id && (
                    <Separator />
                  )}
                </div>
              ))}
            </div>
            <CartSummary summary={summary} totalPrice={totalPrice} />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
