import { deleteReport } from "../../services/ReportsService";

const ReportsListElement = ({report, selectReport, refreshReports}) => {
    const onClickDelete = async () => {
        await deleteReport(report.id);
        refreshReports();
    }

    return (
        <tr>
            <th className="text-primary">{report.id}</th>
            <td>{report.filters.map((filter) => filter.type).join(", ")}</td>
            {report.timeScaleStart
                ? <td>{new Date(report.timeScaleStart).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                : <td></td>
            }
            {report.timeScaleEnd
                ? <td>{new Date(report.timeScaleEnd).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                : <td></td>
            }
            {report.timeScaleStep
                ? <td>{report.timeScaleStep}</td>
                : <td></td>
            }
            <td>{report.dataType}</td>
            <td>{report.visualizationType}</td>
            <td className="flex gap-2">
                <button className="btn btn-primary" onClick={() => selectReport(report)}>Editer</button>
                <button className="btn btn-warning" onClick={onClickDelete}>Supprimer</button>
            </td>
        </tr>
    );
};

export default ReportsListElement;