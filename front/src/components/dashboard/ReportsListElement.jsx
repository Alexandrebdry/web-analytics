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
            setEvents(response);
        }
    }

    useEffect(() => {
        setInterval(() => {
            getEvents();
        }, 10000);
    }, []);

    if (report.visualizationType === 'KPI') {
        return <KpiDisplay events={events} report={report}/>
    } else if (report.visualizationType === 'Graphe') {
        return <GraphDisplay events={events} report={report}/>
    } else if (report.visualizationType === 'Heatmap') {
        return <HeatmapDisplay events={events} report={report}/>
    }

    return '';
}

export default ReportsListElement;

export const getTypeTranslation = (type) => {
    const translations = {
        'KPI': 'Indicateur',
        'Graphe': 'Graphique',
        'Heatmap': 'Heatmap',
        'mouse': 'Déplacement du curseur',
        'click': 'Clics',
        'session': 'Sessions',
        'pageVisited': 'Pages visitées',
        'connexion': 'Connexions',
    };

    return translations[type] ?? type;
}

export const getDateToFormat = (date) => {
    return new Date(date).toLocaleDateString('fr-FR')
}