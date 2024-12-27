import RandomProduct from "./components/RandomProduct";

import Sidebar from "./components/Sidebar";
import FlachSales from "./components/FlachSales";
import CategorySales from "./components/CategorySales";
import BestSellingProducts from "./components/BestSellingProducts";
import MusicBox from "./components/MusicBox";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/NewArrival";
import { useEffect } from "react";
import { gitProduct } from "../Wishlist/wishlistSlice";
import useRedux from "../../hooks/useRedux";
import { getBaker } from "../../services/apibaker";

function Homepage() {
  useEffect(() => {
    getBaker().then((data) => console.log(data));
  }, []);

  const { dispatch, appSelector } = useRedux();

  const { Data } = appSelector((state) => state.product);
  useEffect(() => {
    dispatch(gitProduct(Data));
  }, [dispatch, Data]);
  return (
    <div className=" flex flex-col  gap-[500px] overflow-hidden ">
      <div className="grid grid-cols-[auto_1fr_auto] gap-20  mx-28  h-72   ">
        <Sidebar />
        <RandomProduct />
      </div>
      <div className=" flex justify-center items-center flex-col gap-[200px]">
        <FlachSales />
        <CategorySales />
        <BestSellingProducts />
        <MusicBox />
        <ExploreProducts />
        <NewArrival />
        <div className="w-screen flex justify-center items-center ">
          <img src="Frame3.png" alt="Frame3" className="  w-2/3" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
