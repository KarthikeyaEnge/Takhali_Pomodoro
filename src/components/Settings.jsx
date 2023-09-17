import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useSettings } from "../context/SettingsProvider";
const Settings = () => {
  const {
    pomodorotime,
    setPomodorotime,
    shorttime,
    setShorttime,
    longtime,
    setLongtime,
  } = useSettings();
  return (
    <section className="w-full flex flex-col justify-center items-center mt-8">
      <button
        className="flex flex-row gap-2 items-center font-poppins-500 text-cyan-400 bg-transparent rounded-full shadow-inner shadow-cyan-500 px-4 py-2 active:shadow-none "
        onClick={() => document.getElementById("setting").showModal()}
      >
        <GiSettingsKnobs />
        Settings
      </button>

      <dialog id="setting" className="modal ">
        <form
          method="dialog"
          className="dark:bg-slate-900 bg-slate-300 w-64 h-auto px-4 py-2 rounded-2xl"
        >
          <h1 className="font-poppins-500 text-2xl flex gap-2 items-center justify-center">
            <GiSettingsKnobs />
            Settings
          </h1>
          <div className="divider text-slate-300"></div>
          <h3>MAX TIME (MINUTES)</h3>
          <div>
            <label htmlFor="pomodoro_time" className=" label label-text">
              {" "}
              Pomodoro
            </label>
            <input
              type="number"
              name="pomodoro_time"
              min={0}
              max={60}
              className="input w-full"
              value={pomodorotime}
              onChange={(e) => setPomodorotime(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="short_time" className=" label label-text">
              Short Break
            </label>
            <input
              type="number"
              name="short_time"
              min={5}
              max={25}
              className="input w-full"
              value={shorttime}
              onChange={(e) => setShorttime(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="long_time" className=" label label-text">
              Long Break
            </label>
            <input
              type="number"
              name="long_time"
              min={15}
              max={45}
              className="input w-full"
              value={longtime}
              onChange={(e) => setLongtime(parseInt(e.target.value))}
            />
          </div>
          <div className="mt-2">
            <button className="btn">close</button>
          </div>
        </form>
      </dialog>
    </section>
  );
};

export default Settings;
