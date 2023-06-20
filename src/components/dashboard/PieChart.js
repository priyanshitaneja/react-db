import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Active", "In progress", "Expired", "Never submitted"];
const data = [10, 20, 30, 10];

let customLabels = labels.map((label, index) => `${label}: ${data[index]}`);

const dataSet = {
  labels: customLabels,
  datasets: [
    {
      borderWidth: 0,
      backgroundColor: ["#76b82a", "#ea5b1b", "#ffcc33", "#cc3333"],
      data: data,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
  datalabels: {
    display: true,
  },
  plugins: {
    legend: {
      position: "right",
      align: "center",
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
};

const PieChart = () => {
  return (
    <div className="bg-white w-1/2 rounded-2xl p-4 lg:py-7 lg:px-10">
      <div className="font-montserrat text-base lg:text-lg font-bold mb-1">Activities</div>
      <div className="mt-6 h-36 w-full">
        <Pie options={options} data={dataSet} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default PieChart;
