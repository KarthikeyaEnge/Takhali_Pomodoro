import { useState, useEffect } from "react";
const useTimer = (time, timetype) => {
  const [tlimit, setTlimit] = useState(time * 60);
  const [minu, setMinu] = useState(parseInt(tlimit / 60));
  const [sec, setSec] = useState(parseInt(tlimit % 60));
  const [intervelid, setIntervelid] = useState();
  const [timerstart, setTimerstart] = useState(false);

  useEffect(() => {
    setTlimit(time * 60);
  }, [time]);

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setMinu(parseInt(tlimit / 60));
    setSec(parseInt(tlimit % 60));
    if (tlimit === 0) {
      clearInterval(intervelid);

      if (timetype === "pomodoro") {
        const curr = localStorage.getItem(`${year}_${month}_${months[month]}`);
        localStorage.setItem(
          `${year}_${month}_${months[month]}`,
          parseInt(curr) + 1
        );
      }
    }
  }, [tlimit]);

  const starttimer = () => {
    setTimerstart((prev) => !prev);
    const id = setInterval(() => {
      setTlimit((prev) => prev - 1);
    }, 1000);
    setIntervelid(id);
  };

  const stoptimer = () => {
    setTimerstart((prev) => !prev);
    clearInterval(intervelid);
  };

  const resettimer = () => {
    setTlimit(time * 60);
  };

  return { starttimer, stoptimer, resettimer, minu, sec, tlimit, timerstart };
};

export default useTimer;
