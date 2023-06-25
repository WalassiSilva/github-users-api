const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                </div >
            </div >
           `

           let repositoriesItems = ''
           user.repositories.forEach(repo => {
            repositoriesItems += `
            <li><a href="${repo.html_url}" target="_blank" >${repo.name}</a></li>`
           })

           if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositoires</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
           }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
       
    }
}

export { screen };