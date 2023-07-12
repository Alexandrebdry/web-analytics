import { v4 as uuidv4 } from 'uuid';
function generateUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = generateUniqueId();
        localStorage.setItem('userId', userId);
    }
    return userId;
}

function generateUniqueId() {
    return uuidv4();
}

export { generateUserId };