import { API_URL, TOKEN } from './apiConstantes.js';


const USERS_PREFIX = '/users';

export const findUsers = async () => {
    const response = await fetch(API_URL + USERS_PREFIX + '', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const validateUser = async (id) => {
    const response = await fetch(API_URL + USERS_PREFIX + '/validate/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}