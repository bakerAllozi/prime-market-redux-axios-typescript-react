import { useEffect } from "react";
import ShowProduct from "../ui/ShowProduct";
import { gitBestSellingProducts } from "../HomepageSlice";
import BoxBroduct from "../ui/BoxBroduct";
import useRedux from "../../../hooks/useRedux";

function BestSellingProducts() {
  const { dispatch, appSelector } = useRedux();
  const { BestSellingProducts } = appSelector((state) => state.product);
  useEffect(() => {
    dispatch(gitBestSellingProducts());
  }, [dispatch]);
  return (
    <ShowProduct
      title="Best Selling Products"
      viewBecause="This Month"
      noButton={false}
      buttonText="View All"
    >
      <div className=" flex flex-row  gap-16">
        {BestSellingProducts.map((data) => (
          <div key={data.id}>
            <BoxBroduct product={data} idItem={data.id} />
          </div>
        ))}
      </div>
    </ShowProduct>
  );
}

export default BestSellingProducts;
