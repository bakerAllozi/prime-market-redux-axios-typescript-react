/*eslint react/prop-types:0*/

import { faEye, faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stars from "./Stars";

import ImgEffects from "./ImgEffects";
import { deleteFromWishList } from "../../Wishlist/wishlistSlice";
import useRedux from "../../../hooks/useRedux";
import { motion } from "framer-motion";
import { getProductsILiked } from "../HomepageSlice";
import { IProduct } from "../../../types/product.types";

function BoxBroduct({
  product,
  AddTo = "Add To WishList",
  idItem,
  WasteBasket = false,
  noButton,
}: {
  product: IProduct;
  AddTo?: string;
  idItem: number;
  WasteBasket?: boolean;
  noButton?: boolean;
}) {
  const { dispatch, appSelector } = useRedux();

  const { productsILiked } = appSelector((state) => state.product);
  const arrOfIdLiked = productsILiked.map((e) => e.id);
  const isLiked = arrOfIdLiked.includes(idItem);

  function handelDelete() {
    dispatch(deleteFromWishList(idItem));
  }
  return (
    <div className="  relative h-96 w-72    ">
      <p className=" absolute top-2 left-2 rounded-sm  flex justify-center items-center z-10  bg-red-600  w-14 h-6">
        -40%
      </p>
      {WasteBasket ? (
        <p
          className=" absolute right-2 top-2 z-10 cursor-pointer"
          onClick={handelDelete}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </p>
      ) : (
        <motion.p
          animate={{ scale: isLiked ? [1.1, 1.8, 1.1] : 1.1 }}
          transition={{ delay: 0, type: "tween", duration: 0.4 }}
          className=" absolute right-2 top-2 z-10 cursor-pointer"
          onClick={() => {
            dispatch(getProductsILiked(idItem));
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`${isLiked && "text-red-600"}`}
          />
        </motion.p>
      )}
      <p className=" absolute right-2 top-8 z-10 cursor-pointer">
        <FontAwesomeIcon icon={faEye} />
      </p>

      <ImgEffects
        product={product}
        AddTo={AddTo}
        idItem={idItem}
        noButton={noButton}
      />
      <p className=" font-bold"> {product.title}</p>
      <div className=" space-x-4  absolute right-2 bottom-2  ">
        <span className=" text-red-600">${product.price}</span>

        <span className=" text-zinc-500 relative ">
          ${(product.price + product.price * (40 / 100)).toFixed(0)}
          <p className=" absolute right-0   bottom-1  text-slate-300 ">
            ______
          </p>
        </span>
      </div>
      <div>
        <span className=" absolute left-2 bottom-2">
          <Stars numStare={product.rating.rate} />
        </span>
        <span className=" absolute  left-0    bottom-8  text-sm text-slate-300">
          ({product.rating.count})
        </span>
      </div>
    </div>
  );
}

export default BoxBroduct;
