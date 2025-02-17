"use client";
import Logo from "@/share/logo/Logo";
import { HeaderConfig } from "@/share/common/types";
import { useLayout } from "@/components/hooks/useLaout";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ShoppingBag } from "lucide-react";

export const Header = ({ config }: { config: HeaderConfig }) => {
  const { mediaQueryConfig } = useLayout();
  const { navigation, cart } = config;
  const { isLg } = mediaQueryConfig;
  
  const { cart: cartState } = useSelector((state: RootState) => state.cartState);
  
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header-wrapper">
          <Logo />

          <div className="header-nav__wrapper">
            <Link
              href={cart.href}
              className="ml-auto mr-5 relative group"
            >
              <div className="p-2 transition-transform duration-300 ">
                <ShoppingBag className="w-6 h-6 text-zinc-500 group-hover:text-zinc-800" />
                {cartState.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-medium min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1.5">
                    {cartState.length}
                  </span>
                )}
              </div>
            </Link>
            
            {isLg ? (
              <BurgerMenu navigation={navigation} />
            ) : (
              <div className="header-nav">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-zinc-500 hover:text-zinc-800 transition-colors duration-300 font-bold tracking-wide"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;