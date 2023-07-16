import ReportsListElement from "./ReportsListElement";

const ReportsList = ({reports}) => {
    const kpiReports = reports.filter((report) => report.visualizationType === 'KPI');
    const graphReports = reports.filter((report) => report.visualizationType === 'Graphe');
    const heatmapReports = reports.filter((report) => report.visualizationType === 'Heatmap');

    return (
        <>
            {
                kpiReports.map((report, index) => {
                    return <ReportsListElement key={`dashboard_kpi_${index}`} report={report} />
                })
            }
            {
                graphReports.map((report, index) => {
                    return <ReportsListElement key={`dashboard_graph_${index}`} report={report} />
                })
            }
            {
                heatmapReports.map((report, index) => {
                    return <ReportsListElement key={`dashboard_heatmap_${index}`} report={report} />
                })
            }
        </>
    );
}

export default ReportsList;