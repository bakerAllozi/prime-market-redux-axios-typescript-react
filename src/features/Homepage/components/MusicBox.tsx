import Time from "../ui/Time";

function MusicBox() {
  return (
    <div className=" overflow-hidden     w-[80%]    h-svh  relative">
      <img src="Frame.png" alt="Frame" className="   absolute" />
      <Time
        setSecond={3}
        setMinute={33}
        setHour={4}
        setDay={5}
        timer2On={true}
      />
      <button className=" bg-green-500 text-white absolute bottom-48  p-2 left-10">
        Buy Now!
      </button>
    </div>
  );
}

export default MusicBox;
