import { useEffect } from "react";
import BoxItem from "./components/BoxItem";
import CartTotal from "./components/CartTotal";
import Button from "./ui/Button";
import { calcPrice, RemoveALLFromCart } from "./CartSlice";
import useRedux from "../../hooks/useRedux";

function Cart() {
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(calcPrice());
  });
  const handelRemoveALLFromCart = () => {
    dispatch(RemoveALLFromCart());
  };
  return (
    <div className=" ">
      <BoxItem />
      <div className=" flex justify-around items-center mt-6">
        <Button handelRemoveALLFromCart={handelRemoveALLFromCart}>
          Return To Shop
        </Button>
        <Button>Update Cart</Button>
      </div>
      <CartTotal />
    </div>
  );
}

export default Cart;
