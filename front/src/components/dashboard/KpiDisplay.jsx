import { getDateToFormat, getTypeTranslation } from "./ReportsListElement";

const KpiDisplay = ({events, report}) => {
    const type = events.length
        ? events[0].type ?? ''
        : '';

    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-title">Nombre de {(getTypeTranslation(report)).toLowerCase()}</div>
                <div className="stat-value text-primary">{events.length}</div>
                <div className="stat-desc">Entre le {getDateToFormat(report.timeScaleStart)} et le {getDateToFormat(report.timeScaleEnd)}</div>
            </div>
        </div>
    );
}

export default KpiDisplay;