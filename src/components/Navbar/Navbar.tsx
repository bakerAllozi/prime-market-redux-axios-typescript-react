import { NavLink } from "react-router-dom";
import Like from "./Like";
import Basket from "./Basket";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <div className="   h-14  flex   justify-around items-center  fixed top-0 left-0 w-full bg-white shadow  z-50  text-sm sm:text-[17px]  ">
      <p className=" text-xl  font-bold">Exclusive</p>
      <nav className=" sm :flex  sm:block gap-5 hidden">
        <NavLink
          to="/"
          className="border-current border-zinc-300  p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Home
        </NavLink>
        <NavLink
          to="Contact"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Contact
        </NavLink>
        <NavLink
          to="About"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          About
        </NavLink>
        <NavLink
          to="SignUp"
          className="border-current border-zinc-300 p-2 p-b-4 hover:border-b-2 h-10 "
        >
          Sign Up
        </NavLink>
      </nav>
      {/* باقي اجزاء ال bar*/}
      <div className=" flex  gap-10  items-center justify-center">
        <SearchBar />
        <Like />
        <Basket />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
