import { getUser } from         './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getEvents } from       './services/events.js'
import { user } from            './objects/user.js'
import { screen } from          './objects/screen.js'

import { baseUrl} from './variables.js'

document.getElementById('btn-search').addEventListener("click", () => {
    const userName = document.getElementById('input-search').value;
    
    if(validateEmptyInput(userName)) return;
    getUserData(userName);
    getEvents(userName);
})

document.getElementById('input-search').addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterPressed = key === 13;

    if(isEnterPressed){
        if(validateEmptyInput(userName)) return;
        getUserData(userName);
        getEvents(userName);
    }
});

async function getUserData(userName){
    
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);
    const eventResponse = await getEvents(userName);

    if(userResponse.message === "Not Found"){
        screen.renderNotFound();
        return
    }    

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(eventResponse);    
    
    screen.renderUser(user);
}

function validateEmptyInput(userName){
    if(userName.length === 0) {
        alert( "Digite o nome do usuário do GitHub");
        return true;
    }
}
