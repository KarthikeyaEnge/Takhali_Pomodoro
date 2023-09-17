import React, { useEffect, useState } from "react";
import { FaPlay, FaPause, FaArrowsRotate } from "react-icons/fa6";
import useTimer from "../Hooks/useTimer";
import { useSettings } from "../context/SettingsProvider";
const Timer = ({ timelimit, timetype }) => {
  const [key, setKey] = useState(0);

  const [showtime, setShowtime] = useState(
    `${parseInt((timelimit * 60) / 60)
      .toString()
      .padStart(2, "0")}:${parseInt((timelimit * 60) % 60)
      .toString()
      .padStart(2, "0")}`
  );

  const {
    starttimer,
    stoptimer,
    resettimer,
    minu: minutes,
    sec: seconds,
    tlimit: totalsec,
    timerstart,
  } = useTimer(timelimit, timetype);

  useEffect(() => {
    setShowtime(
      () =>
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
    );
  }, [minutes, seconds]);

  return (
    <section className="flex flex-col items-center gap-4">
      <section className="relative shadow-2xl shadow-cyan-700 rounded-full">
        <section className=" shadow-inner shadow-cyan-700 rounded-full p-3">
          <div
            className=" radial-progress text-cyan-400 font-sora-600  flex flex-col items-center justify-center"
            style={{
              "--value": (parseInt(totalsec) / parseInt(timelimit * 60)) * 100,
              "--size": "20rem",
              "--thickness": "0.5rem",
            }}
          >
            <button
              className="absolute flex-shrink-0 bg-slate-950 backdrop-blur-lg bg-opacity-70 shadow-inner shadow-cyan-900 text-4xl text-cyan-400 rounded-full p-3 active:shadow-none top-10 -left-2"
              onClick={stoptimer}
            >
              <FaPause />
            </button>
            <button
              className="absolute flex-shrink-0 bg-slate-950 backdrop-blur-lg bg-opacity-70 shadow-inner shadow-cyan-900 text-4xl text-cyan-400 rounded-full p-3 active:shadow-none top-10 -right-2"
              onClick={resettimer}
            >
              <FaArrowsRotate />
            </button>
            <h1 className="flex-shrink-0 self-center text-6xl">{showtime}</h1>

            <button
              className={`absolute flex-shrink-0 bg-slate-950 backdrop-blur-lg bg-opacity-70 shadow-inner shadow-cyan-900 text-4xl text-cyan-400 rounded-full p-3 active:shadow-none mt-10 -bottom-5 ${
                timerstart
                  ? " btn-disabled cursor-not-allowed"
                  : "btn-active cursor-pointer"
              }`}
              onClick={starttimer}
              disabled={timerstart}
            >
              <FaPlay />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Timer;
