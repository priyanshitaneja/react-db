import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      cubicInterpolationMode: "monotone",
    },
    {
      label: "My First dataset",
      backgroundColor: "rgb(190, 99, 132)",
      borderColor: "rgb(190, 99, 132)",
      data: [20, 1, 9, 14, 20, 28, 15],
      cubicInterpolationMode: "monotone",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxHeight: 5,
      },
    },
    tooltip: {
      enabled: true,
      position: "nearest",
    },
  },

  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const LineChart = ({ title }) => {
  return (
    <div className="relative bg-white rounded-2xl py-7 px-10" style={{ height: "359px" }}>
      <h4 className="font-montserrat text-lg font-bold mb-1">{title}</h4>
      <div className="absolute left-[30px] right-[30px] bottom-[30px]" style={{ height: "267px" }}>
        <Line width={10} options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
