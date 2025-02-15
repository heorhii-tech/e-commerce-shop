"use client";
import Image from "next/image";
import Logo from "@/share/logo/Logo";
import { HeaderConfig } from "@/share/common/types";
import { useLayout } from "@/components/hooks/useLaout";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
export const Header = ({ config }: { config: HeaderConfig }) => {
  const { mediaQueryConfig } = useLayout();
  const { navigation, cart } = config;
  console.log(cart);
  const {  isLg  } = mediaQueryConfig;
  return (
    <header>
      <div className="container mx-auto">
        <div className="header-wrapper">
          <Logo />

          <div className="header-nav__wrapper">
            <Link
              href={cart.href}
              className="ml-auto  mr-[20px] cursor-pointer"
            >
              <Image
                src={cart.icon}
                alt="Cart Icon"
                width={30}
                height={30}
                priority
              />
            </Link>
            {isLg ? (
              <BurgerMenu navigation={navigation} />
            ) : (
              <div className="header-nav ">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="header-nav__link"
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
