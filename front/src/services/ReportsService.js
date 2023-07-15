import { API_URL, TOKEN } from './apiConstantes.js';


const REPORTS_PREFIX = '/reports';

export const findReports = async () => {
    const response = await fetch(API_URL + REPORTS_PREFIX, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}