import { API_URL, TOKEN } from './apiConstantes.js';


const ROLES_PREFIX = '/roles';

export const updateRoles = async (userId, roles) => {
    const response = await fetch(API_URL + ROLES_PREFIX + '/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify({
            userId: userId,
            roles: roles
        })
    });
    return response.json();
}