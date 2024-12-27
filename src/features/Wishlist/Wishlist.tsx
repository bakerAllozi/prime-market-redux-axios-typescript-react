import BoxBroduct from "../Homepage/ui/BoxBroduct";
import ShowProduct from "../Homepage/ui/ShowProduct";
import { useState } from "react";
import { gitCartItem } from "../Cart/CartSlice";
import { deleteAllFromWishList } from "./wishlistSlice";
import { Link } from "react-router-dom";
import useRedux from "../../hooks/useRedux";

function Wishlist() {
  const { dispatch, appSelector } = useRedux();
  const { wishlistData } = appSelector((state) => state.wishlistData);
  const [viewAll, setViewAll] = useState(false);

  const handelMoveAll = () => {
    dispatch(gitCartItem(wishlistData));
    dispatch(deleteAllFromWishList());
  };
  return (
    <div className="relative  pt-28 ">
      {wishlistData.length < 1 ? (
        <div className="     flex justify-center  items-center ">
          <Link
            to="/"
            className=" flex justify-center  items-center  bg-red-700 text-white p-2 rounded-sm"
          >
            You haven`t added item to shopping list press to Back Home
          </Link>
        </div>
      ) : (
        <ShowProduct
          viewBecause={` Wishlist (${wishlistData.length})`}
          NoWScreen={false}
        >
          <button
            className=" border-2 bg-red-600 text-white   p-2 mb-8 absolute top-[-60px]  left-32"
            onClick={() => setViewAll((e) => !e)}
          >
            View All Products
          </button>
          <p
            className=" absolute  top-[-60px] right-32 border-black border-2 p-1   cursor-pointer   "
            onClick={() => handelMoveAll()}
          >
            Move All To Cart
          </p>
          <div
            className={`  relative flex  flex-row justify-center items-center gap-16   h-[450px]  overflow-x-scroll       ${
              viewAll ? "  flex-wrap" : ""
            }`}
          >
            {wishlistData.map((data) => (
              <div key={data.id} className="">
                <BoxBroduct
                  product={data}
                  AddTo="Add To Cart"
                  idItem={data.id}
                  WasteBasket={true}
                  noButton={true}
                />
              </div>
            ))}
          </div>
        </ShowProduct>
      )}
    </div>
  );
}

export default Wishlist;
