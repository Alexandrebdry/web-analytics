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
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const updateUser = async (user) => {
    const response = await fetch(API_URL + USERS_PREFIX + '/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(user)
    });
    return response.json();
}

export const updateUserPassword = async (user) => {
    const response = await fetch(API_URL + USERS_PREFIX + '/update/password', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(user)
    });
    return response.json();
}