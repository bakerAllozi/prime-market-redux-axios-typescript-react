import useRedux from "../../../hooks/useRedux";
import { IProduct } from "../../../types/product.types";
import { calcPrice, decreaseQuantity, increaseQuantity } from "../CartSlice";

function BoxItem() {
  const { dispatch, appSelector } = useRedux();

  const { cartData } = appSelector((state) => state.cartItem);
  const handelIncrease = (e: number) => {
    dispatch(increaseQuantity(e));
    dispatch(calcPrice());
  };
  const handelDecrease = (e: number) => {
    dispatch(decreaseQuantity(e));
    dispatch(calcPrice());
  };

  return (
    <div className=" flex   flex-col   justify-center items-center ">
      <div className=" h-[72px] w-[1170px]  shadow-md flex justify-center gap-[130px]    items-center  ">
        <span className="w-[200px] flex justify-center items-center gap-3  ">
          Product
        </span>
        <span className="w-[100px]">Price</span>
        <span className="w-[100px]">Quantity</span>
        <span className="w-[100px]  flex justify-center items-center gap-3">
          Subtotal
        </span>
      </div>
      {cartData.map((data: IProduct) => (
        <div
          key={data.id}
          className=" h-[72px] w-[1170px]  flex justify-center gap-[130px]    items-center  shadow-md  "
        >
          <span className="flex justify-around  items-center gap-3 w-[300px] ">
            <img src={data.image} className=" w-10 h-10" />
            <p className=" w-[200px]">
              {data.title.split(" ").slice(0, 3).join(" ")}
            </p>
          </span>
          <span className="w-[100px]">
            <span>$</span>
            {data.price}
          </span>
          <span className="w-[100px] ">
            <div className=" w-14   border-2  rounded-sm   flex  justify-around items-center   ">
              <p>{data.quantity}</p>
              <div className=" flex flex-col  gap-3 items-center p-1">
                <p
                  className=" w-4 h-4   p1 flex  items-center justify-center cursor-pointer bg-[#F5F5F5]  "
                  onClick={() => handelIncrease(data.id)}
                >
                  +
                </p>
                <p
                  className="w-4 h-4 p1 flex  items-center justify-center  cursor-pointer bg-[#F5F5F5]"
                  onClick={() => data.quantity === 1 || handelDecrease(data.id)}
                >
                  -
                </p>
              </div>
            </div>
          </span>

          <span className="w-[100px]  flex justify-center items-center gap-3">
            <span>$</span> {data.price2 || data.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BoxItem;
