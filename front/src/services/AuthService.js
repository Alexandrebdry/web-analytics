import {API_URL} from "../main.jsx";
import {TOKEN} from "../main.jsx";

export const profile = async () => {
    const response = await fetch(API_URL + '/profile', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}