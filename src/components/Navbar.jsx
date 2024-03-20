import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#d1fae5] mx-auto w-full flex justify-between items-center p-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">AcutionsSaite</h1>
        {/*SearchBar */}
        <SearchBar icon={<AiOutlineSearch size={25} />} />

        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="">Lägg till</NavLink>
          </li>
          <li>
            <NavLink to="">Pågående</NavLink>
          </li>
          <li>
            <NavLink to="">Avslutade</NavLink>
          </li>
        </ul>
        <button
          className="block md:hidden text-x1"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </div>
      {/*Mobile menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-[#d1fae5] flex-col w-full items-center px-4 pt-16 pb-10 gap-6 text-[14px]`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="">Lägg till</NavLink>
        <NavLink to="">Pågående</NavLink>
        <NavLink to="">Avslutade</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
