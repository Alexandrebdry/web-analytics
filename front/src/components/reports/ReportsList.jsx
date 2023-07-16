import ReportsListElement from "./ReportsListElement.jsx";

const ReportsList = ({reports, selectReport, refreshReports}) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-primary">Id</th>
                    <th>Filtre</th>
                    <th>Date de début</th>
                    <th>Date de fin</th>
                    <th>Echelle de temps (en minutes)</th>
                    <th>Type de données</th>
                    <th>Type de visuels</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        reports
                        .sort((reportA, reportB) => reportA.id - reportB.id)
                        .map((report) => {
                            return <ReportsListElement 
                                key={report.id} 
                                report={report} 
                                selectReport={selectReport} 
                                refreshReports={refreshReports}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportsList;