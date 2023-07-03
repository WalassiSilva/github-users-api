import { baseUrl, eventsQtde } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQtde}`);
    return await response.json(); 
}

export { getEvents }