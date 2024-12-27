function ShowProduct({
  title,
  viewBecause,
  noButton = true,
  buttonText,
  children,
  noTextAbout = true,
  NoWScreen = true,
}: {
  title?: string;
  viewBecause?: string;
  buttonText?: string;
  children?: React.ReactNode;
  noButton?: boolean;
  noTextAbout?: boolean;
  NoWScreen?: boolean;
}) {
  return (
    <div className={`pb-8 relative ${NoWScreen ? "w-screen " : ""}`}>
      {noTextAbout && (
        <div className=" absolute left-[150px] top-[-150px] ">
          <p className=" text-red-600 space-x-2 ">
            <span className="  p-2  rounded-sm   bg-red-600 ">|</span>
            <span>{viewBecause}</span>
          </p>

          <div className=" mt-9 font-extrabold text-xl  space-x-16 mb-6  ">
            <span>{title}</span>
          </div>
        </div>
      )}
      <div className=" relative flex justify-center items-center">
        {children}
      </div>
      <div className="flex justify-center items-center  m-8">
        {noButton || (
          <button className="  bg-red-600 p-2 text-white ">{buttonText}</button>
        )}
      </div>
    </div>
  );
}

export default ShowProduct;
