import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const defaultBackgroundColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]

const defaultBorderColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]

export const DonutChart = ({
  label,
  data,
  options = {},
  backgroundColor = defaultBackgroundColors,
  borderColor = defaultBorderColors,
}) => {
  const chart = {
    labels: label,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return data
    ? <Doughnut data={chart} options={options} />
    : <p>No data found!</p>
}