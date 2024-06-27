"use client";

import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <span>
        <Bars3Icon
          onClick={() => setMenuOpen(true)}
          className="h-6 w-6 text-slate-300 hover:text-gray-600 duration-300 cursor-pointer"
        />
      </span>
      {menuOpen && (
        <div className="p-5 w-[100%] h-[100%] fixed top-0 left-0 bg-[#1a1b1b] ease-in-out transition-all duration-300 z-50">
          <XCircleIcon
            onClick={() => setMenuOpen(false)}
            className="h-6 w-6 text-slate-00 hover:text-gray-600 duration-300 cursor-pointer"
          />
          <ul>
            <li className="mx-2 my-3 md:my-0 font-ring">
              <Link
                onClick={() => setMenuOpen(false)}
                href={"/"}
                className="text-xl hover:text-gray-600 duration-300"
              >
                home
              </Link>
            </li>
            <li className="mx-2 my-3 md:my-0">
              <Link
                onClick={() => setMenuOpen(false)}
                href={"/characters"}
                className="text-xl hover:text-gray-600 duration-300 font-ring"
              >
                characters
              </Link>
            </li>
            <li className="mx-2 my-3 md:my-0">
              <Link
                onClick={() => setMenuOpen(false)}
                href={"/races"}
                className="text-xl hover:text-gray-600 duration-300 font-ring"
              >
                races
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
