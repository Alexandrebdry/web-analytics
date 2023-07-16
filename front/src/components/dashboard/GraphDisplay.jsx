import { getDateToFormat, getTypeTranslation } from "./ReportsListElement";
import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    scales: {
        y: {
            min: 0,
            ticks: {
                stepSize: 20
            }
        }
    },
    aspectRatio: 1.5,
    elements: {
        line: {
            borderWidth: 2,
            borderJoinStyle: "round",
            tension: 0.12,
        },
    }
};

const GraphDisplay = ({events, report}) => {
    const [dataByDate, setDataByDate] = useState([]);

    useEffect(() => {
        const data = events.reduce((acc, event) => {
            let value = 1;
            const dateId = event.date.split('T')[0];

            if (event.data && !isNaN(event.data)) {
                value = event.data;
            }

            if (acc[dateId]) {
                acc[dateId] += value;
            } else {
                acc[dateId] = value;
            }
            return acc;
        }, {});
        setDataByDate(data);
    }, [events]);

    const data = {
        labels: Object.keys(dataByDate).sort((a, b) => new Date(a) - new Date(b)).map((date) => {
            return getDateToFormat(date);
        }),
        datasets: [
            {
                label: getTypeTranslation(report),
                data: Object.keys(dataByDate).sort((a, b) => new Date(a) - new Date(b)).map((key) => dataByDate[key]),
                borderColor: 'rgb(87, 13, 248)',
                backgroundColor: 'rgba(87, 13, 248, 0.5)',
            }
        ]
    };
    
    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <p className="card-title">Evolution du nombre de {(getTypeTranslation(report)).toLowerCase()}</p>
                <Line options={options} data={data} />
                <p className="card-text text-xs">Entre le {getDateToFormat(report.timeScaleStart)} et le {getDateToFormat(report.timeScaleEnd)}</p>
            </div>
        </div>
    );
}

export default GraphDisplay;