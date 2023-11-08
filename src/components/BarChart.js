import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from 'chart.js/auto';


function BarChart({chartData}) {
    return (
        <Bar data={chartData}
            options={{
                plugins : {
                    legend: {
                        display: false,
                    }
                }
            }}/>
    )
}

export default BarChart;