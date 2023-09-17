import { useState, useContext, createContext } from "react";

const TimerContext = createContext({});
const SettingsProvider = ({ children }) => {
  const [pomodorotime, setPomodorotime] = useState(25);
  const [shorttime, setShorttime] = useState(5);
  const [longtime, setLongtime] = useState(15);
  const timervalues = {
    pomodorotime,
    setPomodorotime,
    shorttime,
    setShorttime,
    longtime,
    setLongtime,
  };
  return (
    <TimerContext.Provider value={timervalues}>
      {children}
    </TimerContext.Provider>
  );
};
const useSettings = () => {
  return useContext(TimerContext);
};

export default SettingsProvider;
export { useSettings };
