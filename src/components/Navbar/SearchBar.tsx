import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchPage from "./SearchPage";
import useRedux from "../../hooks/useRedux";

function SearchBar() {
  const { appSelector } = useRedux();
  const { Data } = appSelector((state) => state.product);
  const [searchWorld, setSearchWorld] = useState("");
  const searchedProduct =
    searchWorld.length > 0
      ? Data.filter((data) =>
          `${data.title} ${data.description}  ${data.category}`
            .toLowerCase()
            .includes(searchWorld.toLowerCase())
        )
      : [];
  const handelSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWorld(e.target.value);
  };

  return (
    <div className=" w-64  relative hidden sm:block ">
      {searchWorld.length > 0 ? (
        <SearchPage searchedProduct={searchedProduct} />
      ) : (
        ""
      )}
      <input
        className="  active:text-stone-950  focus:outline-none  text-sm   w-full  h-9  px-2 pr-14   bg-slate-100  rounded-md"
        type="text"
        placeholder="What are you looking for?"
        value={searchWorld}
        onChange={(e) => handelSearchChange(e)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className=" absolute z-10 right-4 top-3"
      />
    </div>
  );
}

export default SearchBar;
