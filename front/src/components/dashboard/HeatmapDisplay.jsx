import { useEffect, useRef, useState } from "react";
import Heatmap from "../Heatmap";
import { getDateToFormat } from "./ReportsListElement";

const HeatmapDisplay = ({events, report}) => {
    const data = events.reduce((acc, event) => {
        return acc.concat(event.data);
    }, []).map((data) => {
        return {
            x: data.x,
            y: data.y,
            value: 1,
            radius: 50,
        }
    });
    const ref = useRef();

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(400);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.clientWidth - 30);
            setHeight((ref.current.clientWidth - 30) * 9 / 16);
        }
    }, []);

    return (
        <div className="card shadow mt-4">
            <div class="card-body">
                <p className="card-title">Heatmap</p>
                <div ref={ref}></div>
                {
                    width && height
                        ? <Heatmap
                            data={data}
                            width={width}
                            height={height}
                        />
                        : `${width}x ${height}y`
                }
                <p className="card-text">Entre le {getDateToFormat(report.timeScaleStart)} et le {getDateToFormat(report.timeScaleEnd)}</p>
            </div>
        </div>
    );
}

export default HeatmapDisplay;