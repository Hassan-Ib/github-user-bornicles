import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  console.log(data);

  const config = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "most used languages",
        data: data.map((item) => item.value),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  console.log(config);
  return (
    <PieChartWrapper>
      <Pie options={{ animateRotate: true }} data={config} />
    </PieChartWrapper>
  );
};

export default PieChart;

const PieChartWrapper = styled.div`
  max-width: 500px;
`;
