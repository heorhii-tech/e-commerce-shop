import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-6 mx-auto">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-blue-100 blur-sm"></div>
        <div className="relative bg-white rounded-full p-4">
          <ShoppingCart size={48} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-900">
          Your cart is empty
        </h3>
        <p className="text-gray-500 max-w-sm">
          Looks like you haven&apos;t added anything to your cart yet.
          Let&apos;s change that!
        </p>
      </div>

      <Link
        href="/"
        className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-00 transition-all"
      >
        Start Shopping
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default EmptyCart;
