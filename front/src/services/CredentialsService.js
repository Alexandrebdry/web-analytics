import { API_URL, TOKEN } from './apiConstantes.js';


const CREDENTIALS_PREFIX = '/credentials';

export const findCredentials = async (id) => {
    const response = await fetch(API_URL + CREDENTIALS_PREFIX + '/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const findAllCredentials = async () => {
    const response = await fetch(API_URL + CREDENTIALS_PREFIX, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const createCredentials = async () => {
    const response = await fetch(API_URL + CREDENTIALS_PREFIX, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const deleteCredentials = async (id) => {
    const response = await fetch(API_URL + CREDENTIALS_PREFIX + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}