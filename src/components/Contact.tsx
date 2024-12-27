import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowProduct from "../features/Homepage/ui/ShowProduct";
import {
  faLuggageCart,
  faMoneyBill,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons/faMoneyBillAlt";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Contact() {
  return (
    <div className="flex justify-center items-center flex-col gap-[150px]  mt-12">
      <div className="flex justify-around  gap-16">
        <span className=" max-w-96 ">
          <h1 className=" text-[30px] ">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </p>
        </span>
        <img
          src="../../public/black-friday-elements-assortment_23-2149074075.avif"
          className=" h-[409px] w-[505px] "
        />
      </div>
      <ShowProduct
        title="Browse By Category"
        viewBecause="Categories"
        noTextAbout={false}
        NoWScreen={false}
      >
        <div className=" flex gap-11 text-sm justify-center items-center">
          <BoxCategory name="Mopnthly Produduct Sale" icons={faMoneyBill} />
          <BoxCategory
            name="Customer active in our site"
            icons={faLuggageCart}
          />
          <BoxCategory
            name="Anual gross sale in our site"
            icons={faMoneyBillAlt}
          />
          <BoxCategory name="Sallers active our site" icons={faStore} />
        </div>
      </ShowProduct>
      <div className=" flex justify-center items-center ">
        <img src="Frame3.png" alt="Frame3" className="  w-2/3" />
      </div>
    </div>
  );
}
const BoxCategory = ({ name, icons }: { name: string; icons: IconProp }) => {
  return (
    <div className="  cursor-pointer border-2 w-44 h-44  flex justify-center items-center  flex-col gap-5  hover:bg-red-600  hover:text-white">
      <FontAwesomeIcon icon={icons} className="w-[30px] h-[30px]" />
      <p>{name}</p>
    </div>
  );
};

export default Contact;
