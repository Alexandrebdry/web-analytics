import { API_URL, TOKEN } from './apiConstantes.js';


const REPORTS_PREFIX = '/reports';

export const findReport = async (id) => {
    const response = await fetch(API_URL + REPORTS_PREFIX + '/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

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

export const createReport = async (report) => {
    const response = await fetch(API_URL + REPORTS_PREFIX, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(report)
    });
    return response.json();
}

export const updateReport = async (report) => {
    const response = await fetch(API_URL + REPORTS_PREFIX + '/' + report.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(report)
    });
    return response.json();
}

export const deleteReport = async (id) => {
    const response = await fetch(API_URL + REPORTS_PREFIX + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}