import { useEffect, useState } from "react";
import { findReportEvents } from "../../services/EventService";
import KpiDisplay from "./KpiDisplay";
import GraphDisplay from "./GraphDisplay";
import HeatmapDisplay from "./HeatmapDisplay";
import GraphBarDisplay from "./GraphBarDisplay";

const ReportsListElement = ({report}) => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const response = await findReportEvents(report.id)
        if (response) {
            setEvents(response);
        }
    }

    useEffect(() => {
        getEvents();
        setInterval(() => {
            getEvents();
        }, 10000);
    }, []);

    if (report.visualizationType === 'KPI') {
        return <KpiDisplay events={events} report={report}/>
    } else if (report.visualizationType === 'Graphe') {
        if (report.dataType === 'taux') {
            return <GraphDisplay events={events} report={report}/>
        } else {
            return <GraphBarDisplay events={events} report={report}/>
        }
    } else if (report.visualizationType === 'Heatmap') {
        return <HeatmapDisplay events={events} report={report}/>
    }

    return '';
}

export default ReportsListElement;

export const getTypeTranslation = (report) => {
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

    for (const key in report.filters) {
        const filter = report.filters[key];
        if (filter.type) {
            return translations[filter.type] ?? filter.type;
        }
    }
    return '';
}

export const getDateToFormat = (date) => {
    return new Date(date).toLocaleDateString('fr-FR')
}