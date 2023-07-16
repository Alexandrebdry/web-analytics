import { useEffect, useState } from "react";
import { findReportEvents } from "../../services/EventService";
import KpiDisplay from "./KpiDisplay";
import GraphDisplay from "./GraphDisplay";
import HeatmapDisplay from "./HeatmapDisplay";

const ReportsListElement = ({report}) => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const response = await findReportEvents(report.id)
        if (response) {
            console.log(response);
            setEvents(response);
        }
    }

    useEffect(() => {
        getEvents();
    }, []);

    if (report.visualizationType === 'KPI') {
        return <KpiDisplay events={events} />
    } else if (report.visualizationType === 'Graphe') {
        return <GraphDisplay events={events} />
    } else if (report.visualizationType === 'Heatmap') {
        return <HeatmapDisplay events={events} />
    }

    return '';
}

export default ReportsListElement;