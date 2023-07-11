const path = import.meta.env.BACKEND_URL + '/api/auth';

export const profile = async () => {
    const response = await fetch(path + '/profile', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(import.meta.env.TOKEN_SECRET)
        }
    });
    return response.json();
}