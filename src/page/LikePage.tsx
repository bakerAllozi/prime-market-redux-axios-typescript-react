import { Link } from "react-router-dom";
import BoxBroduct from "../features/Homepage/ui/BoxBroduct";
import useRedux from "../hooks/useRedux";
function LikePage() {
  const { appSelector } = useRedux();
  const { productsILiked } = appSelector((state) => state.product);
  return (
    <>
      {productsILiked.length > 0 ? (
        <div className=" mt-[100px]  ">
          <h1 className="  text-center mb-12 text-red-700   font-bold text-[30px] ">
            Product Liked
          </h1>
          <div className="flex    flex-row  flex-wrap  gap-16 justify-evenly ">
            {productsILiked.map((data) => (
              <div key={data.id}>
                <BoxBroduct product={data} idItem={data.id} noButton={true} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Link
          to="/"
          className=" flex justify-center  items-center  bg-red-700 text-white p-2 rounded-sm"
        >
          You haven`t Liked product press to Back Home
        </Link>
      )}
    </>
  );
}

export default LikePage;
