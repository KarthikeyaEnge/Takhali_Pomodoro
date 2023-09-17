import React from "react";
import { useState } from "react";
import Timer from "./Timer";
import { useSettings } from "../context/SettingsProvider";
import useTimer from "../Hooks/useTimer";
const TimerModule = () => {
  const [timetype, setTimetype] = useState("pomodoro");
  const { pomodorotime, shorttime, longtime } = useSettings();

  const handletimetype = (timertype) => {
    setTimetype(timertype);
  };

  return (
    <main className="flex flex-col items-center max-h-fit mt-10">
      <div className="tabs tabs-boxed bg-slate-900 shadow-inner shadow-cyan-500 overflow-hidden">
        <button
          className={`tab font-poppins-500 text-cyan-400 overflow-hidden rounded-full  ${
            timetype === "pomodoro" && "tabactive"
          }`}
          onClick={() => handletimetype("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className={`tab font-poppins-500 text-cyan-400 overflow-hidden rounded-full  ${
            timetype === "sbreak" && "tabactive"
          }`}
          onClick={() => handletimetype("sbreak")}
        >
          Short Break
        </button>
        <button
          className={`tab font-poppins-500 text-cyan-400 overflow-hidden rounded-full  ${
            timetype === "lbreak" && "tabactive"
          }`}
          onClick={() => handletimetype("lbreak")}
        >
          Long Break
        </button>
      </div>
      <section className="mt-10">
        {timetype === "pomodoro" && (
          <Timer timelimit={pomodorotime} timetype={timetype} />
        )}
        {timetype === "sbreak" && (
          <Timer timelimit={shorttime} timetype={timetype} />
        )}
        {timetype === "lbreak" && (
          <Timer timelimit={longtime} timetype={timetype} />
        )}
      </section>
    </main>
  );
};

export default TimerModule;
