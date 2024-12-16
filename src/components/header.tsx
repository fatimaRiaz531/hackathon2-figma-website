"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import LoginButtons from "./loginButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const router = useRouter();

  const handleNavigation = (value: string) => {
    router.push(value); 
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          <div>
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-4">
              Bandage
            </h1>
          </div>

          <div
            className={`${open ? "translate-x-0" : "-translate-x-full"
              } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out text-gray-700 md:text-center`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-gray-400 md:text-black font-bold">
              <Select onValueChange={handleNavigation}>
                <SelectTrigger className="w-[180px] cursor-pointer">
                  <SelectValue placeholder="Home" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="/Hero">Home</SelectItem>
                    <SelectItem value="/shop">Shop</SelectItem>
                    <SelectItem value="/blog">Blog</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <li className="p-4 hover:underline underline-offset-2">
                <a href="/about">About</a>
              </li>

              <li className="p-4 hover:underline underline-offset-2">
                <a href="/contact">Contact</a>
              </li>

              <li className="p-4 hover:underline underline-offset-2">
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <button className="md:hidden lg:hidden bg-red-500 text-white">
                  <a href="/loginPage">Login</a>
                </button>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="flex w-full bg-gray-200 rounded-md items-center lg:hidden md:hidden">
              <FontAwesomeIcon icon={faSearch} className="text-xl ml-2" />
            </div>

            <div className="block">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 mr-1 text-2xl"
              ></FontAwesomeIcon>
            </div>
            <div className="block">
              <FontAwesomeIcon icon={faHeart} className="text-2xl"></FontAwesomeIcon>
            </div>

            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>

            <div className="hidden md:flex">
              <LoginButtons />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
