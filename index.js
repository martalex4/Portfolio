const reposDiv = document.querySelector("#repos")

fetch('https://api.github.com/users/martalex4/repos')
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            if (repo.name === "Portfolio") return;
            reposDiv.innerHTML += `
                <a href="${repo.html_url}" target="_blank">
                    <h3>${repo.name.replaceAll("-", " ")}</h3>
                </a>`;
        });
    });