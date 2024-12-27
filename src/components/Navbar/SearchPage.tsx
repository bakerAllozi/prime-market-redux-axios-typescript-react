/*eslint react/prop-types:0*/

function SearchPage({ searchedProduct }) {
  return (
    <div className=" w-full  h-96  bg-white border-[1px] absolute overflow-y-scroll right-0 top-10  ">
      <p className="  font-bold ml-3 mb-4">products</p>
      {searchedProduct.map((product) => (
        <div
          key={product.id}
          className=" mr-3 flex  justify-end items-center p-1  border-y-[1px]  gap-6 cursor-pointer hover:bg-slate-200"
        >
          <p>{product.title}</p>
          <img src={product.image} className=" w-10 h-10" alt="" />
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
