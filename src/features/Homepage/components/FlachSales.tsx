import ShowProduct from "../ui/ShowProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BoxBroduct from "../ui/BoxBroduct";
import Time from "../ui/Time";
import useRedux from "../../../hooks/useRedux";

function FlachSales() {
  const { appSelector } = useRedux();
  const { Data } = appSelector((state) => state.product);

  return (
    <div className=" w-[80%] relative">
      <div className=" absolute   top-[-200px] ">
        <p className=" text-red-600 space-x-2   ">
          <span className="  p-2  rounded-sm   bg-red-600 ">|</span>
          <span> Today’s</span>
        </p>

        <div className=" mt-9 font-extrabold text-xl  space-x-16 mb-6  flex gap-4 justify-between ">
          <span>Flash Sales</span>
          <Time />
        </div>
      </div>
      <ShowProduct
        noTime={false}
        noSwiper={false}
        noButton={false}
        buttonText="View All Products"
        noTextAbout={false}
      >
        <Swiper
          spaceBetween={150}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Data.map((product) => (
            <SwiperSlide key={product.id}>
              <BoxBroduct product={product} idItem={product.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ShowProduct>
    </div>
  );
}

export default FlachSales;
