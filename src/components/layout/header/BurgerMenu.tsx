"use client";

import * as React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Menu } from "lucide-react";
import { HeaderConfig } from "@/share/common/types";
import Link from "next/link";

const BurgerMenu = ({
  navigation,
}: {
  navigation: HeaderConfig["navigation"];
}) => {
  // State to control the drawer's open/close status
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger onClick={() => setIsOpen(true)}>
        <Menu
          style={{ width: "38px", height: "38px" }}
          className=" text-black dark:text-zinc-200"
        />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          {/* Trigger close on link click */}
          <div className="burger-nav__wrapper container">
            {navigation.map((item, index) => (
              <Link
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  padding: "10px",
                  textAlign: "center",
                  color: "white",
                }}
                href={item.href}
                type="button"
                key={index}
                onClick={handleClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenu;
