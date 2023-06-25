import { baseUrl, repositoriesQtde} from '../variables.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQtde}`)
    return await response.json();
}

export {getRepositories}