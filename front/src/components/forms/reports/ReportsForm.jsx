import { useEffect, useState } from "react";
import { updateReport } from "../../../services/ReportsService";

const ReportsForm = ({report, closeModal, refreshReports}) => {
    const [filter, setFilter] = useState('');
    const [timeScaleStart, setTimeScaleStart] = useState('');
    const [timeScaleEnd, setTimeScaleEnd] = useState('');
    const [timeScaleStep, setTimeScaleStep] = useState(1);
    const [dataType, setDataType] = useState('absolu');
    const [visualizationType, setVisualizationType] = useState('KPI');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await updateReport({
            id: report.id,
            filters: [{"type" : filter}],
            timeScaleStart: new Date(timeScaleStart),
            timeScaleEnd: new Date(timeScaleEnd),
            timeScaleStep: timeScaleStep,
            dataType: dataType,
            visualizationType: visualizationType
        });
        closeModal();
        refreshReports();
    }

    useEffect(() => {
        if (report) {
            setFilter(report.filters[0].type);
            setTimeScaleStart(new Date(report.timeScaleStart).toISOString().slice(0, -1));
            setTimeScaleEnd(new Date(report.timeScaleEnd).toISOString().slice(0, -1));
            setTimeScaleStep(report.timeScaleStep);
            setDataType(report.dataType);
            setVisualizationType(report.visualizationType);
        }
    }, [report]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Filtre</span>
                    </label>
                    <select value={filter} onChange={(event) => setFilter(event.target.value)}
                            className="input input-bordered">
                        <option value="mouse">mouse</option>
                        <option value="click">click</option>
                        <option value="session">session</option>
                        <option value="pageVisited">pageVisited</option>
                        <option value="connexion">connexion</option>
                    </select>
                </div>
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Date de début (ISO 8601)</span>
                    </label>
                    <input type="datetime-local" placeholder="Date de début" value={timeScaleStart}
                           onChange={(event) => setTimeScaleStart(event.target.value)}
                           className="input input-bordered"/>
                </div>
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Date de fin (ISO 8601)</span>
                    </label>
                    <input type="datetime-local" placeholder="Date de fin" value={timeScaleEnd}
                           onChange={(event) => setTimeScaleEnd(event.target.value)} className="input input-bordered"/>
                </div>
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Echelle de temps (en minutes)</span>
                    </label>
                    <input type="number" min={1} placeholder="Echelle de temps" value={timeScaleStep}
                           onChange={(event) => setTimeScaleStep(+event.target.value)}
                           className="input input-bordered"/>
                </div>
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Type de données</span>
                    </label>
                    <select value={dataType} onChange={(event) => setDataType(event.target.value)}
                            className="input input-bordered">
                        <option value="absolu">Absolu</option>
                        <option value="taux">Taux</option>
                    </select>
                </div>
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Type de visualisation</span>
                    </label>
                    <select value={visualizationType} onChange={(event) => setVisualizationType(event.target.value)}
                            className="input input-bordered">
                        <option value="KPI">KPI</option>
                        <option value="Graphe">Graphe</option>
                        <option value="Heatmap">Heatmap</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-2 mt-10">
                <button className="btn btn-warning" onClick={closeModal}>Annuler</button>
                <button type="submit" className="btn btn-primary">Mettre à jour</button>
            </div>
        </form>
    );
}

export default ReportsForm;