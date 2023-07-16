import { getDateToFormat, getTypeTranslation } from "./ReportsListElement";
import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const options = {
    scales: {
        r: {
            min: 0,
            ticks: {
                stepSize: 10
            }
        }
    },
    aspectRatio: 1.5,
};

const GraphBarDisplay = ({events, report}) => {
    const [dataByValue, setDataByValue] = useState([]);

    useEffect(() => {
        const data = events.reduce((acc, event) => {
            let value = event.data;

            if (acc[value]) {
                acc[value] += 1;
            } else {
                acc[value] = 1;
            }
            return acc;
        }, {});
        console.log(data);
        setDataByValue(data);
    }, [events]);

    const data = {
        labels: Object.keys(dataByValue),
        datasets: [{
            label: getTypeTranslation(report),
            data: Object.keys(dataByValue).map((key) => dataByValue[key]),
            fill: true,
            backgroundColor: 'rgb(87, 13, 248, 0.2)',
            borderColor: 'rgb(87, 13, 248)',
            pointBackgroundColor: 'rgb(87, 13, 248)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(87, 13, 248)'
        }]
    };
    
    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <p className="card-title">Evolution des {(getTypeTranslation(report)).toLowerCase()}</p>
                <Radar options={options} data={data} />
                <p className="card-text text-xs">Entre le {getDateToFormat(report.timeScaleStart)} et le {getDateToFormat(report.timeScaleEnd)}</p>
            </div>
        </div>
    );
}

export default GraphBarDisplay;