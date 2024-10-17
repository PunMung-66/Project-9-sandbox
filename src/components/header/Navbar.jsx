import React from "react";
import { NavLink } from "react-router-dom";
import { genClothingList, navlist } from "./navlist";
import CartIcon from "../Icon/CartIcon";

function Navbar({ children }) {
  return (
    <nav className="bg-secondary px-4 py-2 sticky top-0 lg:px-32">
      <div className="flex items-center justify-between mx-auto">
        <div className="flex">
          <div className="flex items-center gap-2 md:gap-4 md:mr-10">
            {children}
            <NavLink
              className="text-lg font-semibold text-white flex gap-2 md:gap-4 items-center"
              to={"/"}
            >
              <img
                src="storefront.png"
                alt="storefront-logo"
                className="w-[37px] aspect-square"
              />
              WDB
            </NavLink>
          </div>
          <ul className="hidden text-white gap-6 text-base items-center capitalize md:flex">
            {navlist.map(({ label, path }) => (
              <li className="navlink" key={path}>
                <NavLink to={genClothingList(path)}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* cart */}
        <NavLink to={"/cart"} className="squre-group text-white">
          <CartIcon />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
