import { API_URL, TOKEN } from './apiConstantes.js';

const EVENTS_PREFIX = '/events';

export const findReportEvents = async (reportId) => {
    const response = await fetch(API_URL + EVENTS_PREFIX + '/' + reportId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}
