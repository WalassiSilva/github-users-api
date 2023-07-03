const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" title="foto de perfil">
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    <div class="data-numbers">                      
                        <p class="followers">👥 Seguidores: ${user.followers}</p>
                        <p class="following">👤 Seguindo: ${user.following}</p>
                    </div>
                </div >
            </div >
           `;

        let repositoriesItems = '';
        user.repositories.forEach(repo => {
            repositoriesItems += `
            <li>
            <a href="${repo.html_url}" target="_blank" >
                ${repo.name}
                <div class="repositories-status">
                    <span class="status-count" >🍴: ${repo.forks_count}</span>
                    <span class="status-count" >🌟: ${repo.stargazers_count}</span>
                    <span class="status-count" >👀: ${repo.watchers_count}</span>
                    <span class="status-count" >💻: ${repo.language}</span>
                </div>
                <span></span>
            </a>
            </li>`;
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositories</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
        }

        let eventItems = '';
        user.events.forEach(e => {
            if(e.type === 'PushEvent'){
                eventItems += `
                <li>
                    <p><span class="commit-message">${e.repo.name} </span> - ${e.payload.commits[0].message}</p>
                </li>
                `;
            }else {
                eventItems += `
                <li>
                    <p><span class="commit-message">${e.repo.name} </span> - ${e.type} - ${e.payload.ref_type}</p>
                </li>
                `;
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML +=`
            <div class="events section">
                <h2>Events<h2/>
                <ul>${eventItems}</ul>
            <div/>
            `;
        };

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";

    }
}

export { screen };