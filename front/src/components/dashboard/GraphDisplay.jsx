import { getDateToFormat, getTypeTranslation } from "./ReportsListElement";

const GraphDisplay = ({events, report}) => {
    console.log(report);
    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <p className="card-title">Evolution du nombre de {(getTypeTranslation(report)).toLowerCase()}</p>
                
                <p className="card-text text-xs">Entre le {getDateToFormat(report.timeScaleStart)} et le {getDateToFormat(report.timeScaleEnd)}</p>
            </div>
        </div>
    );
}

export default GraphDisplay;