import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto w-full flex justify-between items-center p-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">AcutionsSaite</h1>

        <div className=" border-b-[1px] border-black flex items-center px-2 w-[200px] sm:w-[w-400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Sök produkter"
          />
        </div>

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
      </div>
    </div>
  );
};

export default Navbar;
