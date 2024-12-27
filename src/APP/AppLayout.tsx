import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="">
      <Navbar />
      <hr className=" text-[1px] " />
      <div className="ml-10  z-50  absolute top-16">
        <span className="text-neutral-500">
          Home {location.pathname === "/" ? "" : location.pathname}
        </span>
      </div>
      <main className=" mt-[100px]   ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
