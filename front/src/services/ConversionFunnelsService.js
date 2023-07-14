import { API_URL, TOKEN } from './apiConstantes.js';


const FUNNELS_PREFIX = '/conversion_funnels';

export const findFunnel = async (id) => {
    const response = await fetch(API_URL + FUNNELS_PREFIX + '/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const findFunnels = async () => {
    const response = await fetch(API_URL + FUNNELS_PREFIX + '', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const createFunnel = async (funnel) => {
    const response = await fetch(API_URL + FUNNELS_PREFIX + '/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(funnel)
    });
    return response.json();
}

export const updateFunnel = async (funnel) => {
    const response = await fetch(API_URL + FUNNELS_PREFIX + '/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(funnel)
    });
    return response.json();
}

export const deleteFunnel = async (id) => {
    const response = await fetch(API_URL + FUNNELS_PREFIX + '/delete/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}