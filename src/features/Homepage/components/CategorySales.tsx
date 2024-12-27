import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowProduct from "../ui/ShowProduct";
import {
  faCamera,
  faComputer,
  faMicrochip,
  faPhone,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function CategorySales() {
  return (
    <div>
      <ShowProduct
        title="Browse By Category"
        viewBecause="Categories"
        noTextAbout={true}
      >
        <div className=" flex gap-11">
          <BoxCategory name="Shirt" icons={faShirt} />
          <BoxCategory name="Phone" icons={faPhone} />
          <BoxCategory name="Computer" icons={faComputer} />
          <BoxCategory name="Microchip" icons={faMicrochip} />
          <BoxCategory name="Camera" icons={faCamera} />
        </div>
      </ShowProduct>
    </div>
  );
}
const BoxCategory = ({ name, icons }: { name: string; icons: IconProp }) => {
  return (
    <div className="  cursor-pointer border-2 w-32 h-32 flex justify-center items-center flex-col gap-5  hover:bg-red-600  hover:text-white">
      <FontAwesomeIcon icon={icons} />
      <p>{name}</p>
    </div>
  );
};

export default CategorySales;
