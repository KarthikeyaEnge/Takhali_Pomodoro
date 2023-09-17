import "./App.css";
import TimerModule from "./components/TimerModule";
import { GiTomato, GiTimeBomb } from "react-icons/gi";
import { useSettings } from "./context/SettingsProvider";
import Settings from "./components/Settings";
import Stats from "./components/Stats";
import { useState } from "react";
import { IoStatsChart } from "react-icons/io5";
function App() {
  const { pomodorotime, shorttime, longtime } = useSettings();
  const [view, setView] = useState("timer");
  return (
    <>
      <header className="flex flex-row justify-center items-center gap-5  bg-slate-900 w-full p-2">
        <GiTomato className="text-5xl text-cyan-500 flex-shrink-0" />
        <h1 className="font-poppins-500 text-slate-300 text-4xl">
          TAKHALI TIMER
        </h1>
      </header>

      <section className=" w-full flex justify-center">
        <div className="tabs tabs-boxed bg-slate-900 shadow-inner shadow-cyan-500 overflow-hidden w-fit">
          <button
            className={`tab font-poppins-500 flex items-center gap-3  text-cyan-400 overflow-hidden rounded-full  ${
              view === "timer" && "tabactive"
            }`}
            onClick={() => setView("timer")}
          >
            <GiTimeBomb className="flex-shrink-0" />
            Timer
          </button>
          <button
            className={`tab flex items-center gap-3 font-poppins-500 text-cyan-400 overflow-hidden rounded-full  ${
              view === "stats" && "tabactive"
            }`}
            onClick={() => setView("stats")}
          >
            <IoStatsChart className="flex-shrink-0" />
            Stats
          </button>
        </div>
      </section>

      {view === "timer" ? (
        <TimerModule
          pomodorotime={pomodorotime}
          shorttime={shorttime}
          longtime={longtime}
        />
      ) : (
        <Stats />
      )}

      <Settings />
    </>
  );
}

export default App;
