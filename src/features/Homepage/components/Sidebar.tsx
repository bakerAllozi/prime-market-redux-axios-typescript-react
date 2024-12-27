import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-74  py-8 w-52 text-sm flex justify-center items-center flex-col gap-2  cursor-pointer border-r-[1px]   ">
      <NavLink to="/">Woman’s Fashion</NavLink>
      <NavLink to="/">Men’s Fashion</NavLink>
      <NavLink to="/">Electronics</NavLink>
      <NavLink to="/"> Home & NavLinkfestyle</NavLink>
      <NavLink to="/">Medicine</NavLink>
      <NavLink to="/">Sports & Outdoor</NavLink>
      <NavLink to="/">Baby’s & Toys</NavLink>
      <NavLink to="/">Groceries & Pets</NavLink>
      <NavLink to="/">Health & Beauty</NavLink>
    </div>
  );
}

export default Sidebar;
