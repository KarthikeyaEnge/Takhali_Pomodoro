import React from "react";
import { Line } from "react-chartjs-2";
import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
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
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  let pomodorodata = [];

  if (localStorage.getItem(year) !== "true") {
    localStorage.setItem(year, "true");
    months.map((e) => {
      localStorage.setItem(`${year}_${month}_${e}`, 0);
      pomodorodata.push(0);
    });
  } else {
    months.map((e) => {
      pomodorodata.push(localStorage.getItem(`${year}_${month}_${e}`));
    });
  }
  const data = {
    labels: months,
    datasets: [
      {
        label: "Pomodoro Montly stats",
        data: pomodorodata,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <section className="w-full flex justify-center items-center mt-10">
      <div className="lg:w-1/2 w-auto">
        <Line data={data} />
      </div>
    </section>
  );
};

export default Stats;
