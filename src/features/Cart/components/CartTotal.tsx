import { useSelector } from "react-redux";
import Button from "../ui/Button";

function CartTotal() {
  const { totalPrice } = useSelector((state) => state.cartItem);

  return (
    <div className=" flex   justify-around mt-24  ">
      <div className=" flex gap-3">
        <input
          className=" border-black border-2 rounded-md w-[200px] h-[40px] p-1"
          type="text"
          placeholder="Coupon Code"
        />
        <Button bgColor={"bg-red-600"} textColor={"text-white"}>
          Apply Coupon
        </Button>
      </div>
      <div className="w-[470px] h-[324px] border-[2px] border-black p-5">
        <h1 className="text-lg">Cart Total</h1>
        <div className="  flex  flex-col   gap-5">
          <p className=" border-b-2 p-2 flex justify-between">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </p>
          <p className=" border-b-2 p-2  flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </p>

          <p className=" p-2   flex justify-between">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Button bgColor={true} textColor={"text-white"}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
