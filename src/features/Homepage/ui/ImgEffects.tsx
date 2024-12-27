/*eslint react/prop-types:0*/
import { motion } from "framer-motion";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { gitWishlistData } from "../../Wishlist/wishlistSlice";
import useRedux from "../../../hooks/useRedux";

function ImgEffects({ product, AddTo, idItem, noButton = false }) {
  const { dispatch, appSelector } = useRedux();

  const { wishlistData } = appSelector((state) => state.wishlistData);
  const { cartData } = appSelector((state) => state.cartItem);

  const arrOfIsSelectedToWishlist = wishlistData.map((e) => e.id);
  const arrOfIsSelectedToCart = cartData.map((e) => e.id);
  const checkIfItIsSelected =
    arrOfIsSelectedToWishlist.includes(idItem) ||
    arrOfIsSelectedToCart.includes(idItem);

  const [itAdd, setItAdd] = useState(false);
  const handelAddToWishlist = () => {
    dispatch(gitWishlistData(idItem));
    setItAdd(true);
  };
  return (
    <div
      className={`group/item  bg-white relative w-full   h-64 flex justify-center items-center border-2  `}
    >
      {itAdd && (
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className="  w-7 h-7 absolute bottom-2 right-14      "
        />
      )}

      <motion.img
        animate={{
          width: itAdd ? [176, 50, 0, 0, 0, 0, 0, 0, 176] : 176,
          height: itAdd ? [176, 50, 0, 0, 0, 0, 0, 0, 176] : 176,
          transform: itAdd
            ? ["translate(0, 0)", "translate(90px, 160px) ", "translate(0, 0)"]
            : "translate(0, 0)",
        }}
        transition={{ delay: 0, type: "tween", duration: 2 }}
        className="  h-44 w-44"
        src={product.image}
        alt=""
      />
      {noButton || (
        <>
          {checkIfItIsSelected ? (
            <p className=" absolute left-[100px] bottom-2  text-black font-bold ">
              {arrOfIsSelectedToCart.includes(idItem)
                ? "it in cart"
                : "it in WishLis"}
            </p>
          ) : (
            <button
              onClick={() => handelAddToWishlist()}
              className="invisible  group-hover/item:visible  absolute   w-full  h-8 bg-black text-white  bottom-0 z-50 flex gap-3 justify-center items-center "
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
              <p>{AddTo}</p>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default ImgEffects;
