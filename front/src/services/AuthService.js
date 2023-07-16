import { API_URL, TOKEN } from './apiConstantes.js';


const AUTH_PREFIX = '/auth';

export const login = async (email, password) => {
    const response = await fetch(API_URL + AUTH_PREFIX + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    return response.json();
}

export const profile = async () => {
    const response = await fetch(API_URL + AUTH_PREFIX + '/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const register = async (data) => {
    const response = await fetch(API_URL + AUTH_PREFIX + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}