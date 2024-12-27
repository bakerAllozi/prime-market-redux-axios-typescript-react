/*eslint react/prop-types:0*/

import { useEffect, useRef, useState } from "react";

function Time({
  setDay = 3,
  setHour = 2,
  setMinute = 3,
  setSecond = 5,
  timer2On = false,
}) {
  // حساب الوقت المستهدف بناءً على الأيام والساعات والدقائق والثواني المعطاة
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + setDay); // إضافة 3 أيام
  targetTime.setHours(targetTime.getHours() + setHour); // إضافة 23 ساعة
  targetTime.setMinutes(targetTime.getMinutes() + setMinute); // إضافة 5 دقائق
  targetTime.setSeconds(targetTime.getSeconds() + setSecond); // إضافة 40 ثانية

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let intervalRef = useRef();

  const calculateRemainingTime = () => {
    const now = new Date();
    const remainingTime = targetTime - now;

    setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
    setHours(
      Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    setMinutes(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((remainingTime % (1000 * 60)) / 1000));
  };

  useEffect(() => {
    intervalRef.current = setInterval(calculateRemainingTime, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {timer2On ? (
        <div className=" flex  gap-4 absolute left-12     top-64    ">
          <Timer2 timeIn="days" num={days} />

          <Timer2 timeIn="hours" num={hours} />

          <Timer2 timeIn="minutes" num={minutes} />

          <Timer2 timeIn="seconds" num={seconds} />
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Timer timeIn="days" num={days} />
          <span className=" text-[30px] text-red-700 ">:</span>
          <Timer timeIn="hours" num={hours} />
          <span className=" text-[30px] text-red-700 ">:</span>
          <Timer timeIn="minutes" num={minutes} />
          <span className=" text-[30px] text-red-700 ">:</span>
          <Timer timeIn="seconds" num={seconds} />
        </div>
      )}
    </>
  );
}
const Timer = ({ timeIn, num }) => {
  return (
    <div>
      <span className=" flex flex-col gap-1 justify-center items-center">
        <p>{timeIn}</p>
        <p className=" text-[25px] font-bold ">{num}</p>
      </span>
    </div>
  );
};
const Timer2 = ({ timeIn, num }) => {
  return (
    <p className="  z-30   flex-col   p-10 bg-white  flex items-center justify-center  rounded-full   w-16 h-16 text-black ">
      <span className=" font-bold">{num}</span>
      <span>{timeIn}</span>
    </p>
  );
};
export default Time;
