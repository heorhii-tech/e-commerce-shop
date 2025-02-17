"use client";
import Cart from "@/components/sections/Cart";
import { CART_CONFIG } from "@/share/common/common";

const CartPage = () => {
    return (
        <div className="cart-page mx-auto">
            <Cart config={CART_CONFIG} />
        </div>
    );
}
export default CartPage;