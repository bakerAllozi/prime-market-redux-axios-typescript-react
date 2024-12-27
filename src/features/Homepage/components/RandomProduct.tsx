import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { gitRandomProduct } from "../HomepageSlice";
import useRedux from "../../../hooks/useRedux";
import { IProduct } from "../../../types/product.types";

function RandomProduct() {
  const { appSelector, dispatch } = useRedux();

  useEffect(() => {
    dispatch(gitRandomProduct());
  }, [dispatch]);
  const { randomProduct } = appSelector((state) => state.product);

  return (
    <Swiper
      className=" bg-white   text-black  h-72   w-full   mt-4  border-[1px]  "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // pagination={{ clickable: true }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} bg-red-500   mx-2"></span>`; // هنا تغيير لون الدوائر
        },
      }}
      scrollbar={{ draggable: true }}
    >
      {randomProduct.map((data: IProduct) => (
        <SwiperSlide
          className="  w-full h-full relative   bg-white  gap-14"
          key={data.id}
        >
          <div className=" flex justify-center flex-col   w-48  gap-12  p-4  overflow-x-hidden  ">
            <p className=" h-6  overflow-y-hidden">{data.title}</p>

            <h1 className=" font-bold  text-2xl">
              Up to {data.id}% off Voucher
            </h1>
            <Link
              to="/"
              className=" flex items-center justify-center gap-2    "
            >
              <p className=" border-b-black border-b-2">Shop Now</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <img
            src={data.image}
            alt={`${data.id}`}
            className="  w-52 h-52    absolute  right-10 top-10"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RandomProduct;
