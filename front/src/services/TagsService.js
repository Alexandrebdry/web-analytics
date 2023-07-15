import { API_URL, TOKEN } from './apiConstantes.js';


const TAGS_PREFIX = '/tags';

export const findTag = async (id) => {
    const response = await fetch(API_URL + TAGS_PREFIX + '/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const findTags = async () => {
    const response = await fetch(API_URL + TAGS_PREFIX, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}

export const createTag = async (tag) => {
    const response = await fetch(API_URL + TAGS_PREFIX, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(tag)
    });
    return response.json();
}

export const updateTag = async (tag) => {
    const response = await fetch(API_URL + TAGS_PREFIX + '/' + tag.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        },
        body: JSON.stringify(tag)
    });
    return response.json();
}

export const deleteTag = async (id) => {
    const response = await fetch(API_URL + TAGS_PREFIX + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
        }
    });
    return response.json();
}