let portfolio = document.querySelector('#portfolio');
const loading = document.querySelector('.loading');
loading.innerHTML += `<p>Please wait while we load your Github Repos.</p> `;


async function getRepos() {

    let repos = "https://api.github.com/users/RevanToma/repos";
    let responseRepos = await fetch(repos);

    const getRepoImgs = "./repoImgs.json";
    let responseGetRepoImgs = await fetch(getRepoImgs);



    if (responseRepos.ok && responseGetRepoImgs.ok) {
        // DOM output here
        loading.style.display = 'none';

        let data = await responseRepos.json();
        let imagesJson = await responseGetRepoImgs.json();
        console.log(data);

        let imagesJsonIds = imagesJson.map(objekt => objekt.id);
        let filteredJson = data.filter(objekt => imagesJsonIds.includes(objekt.id));




        for (let i = 0; i < filteredJson.length; i++) {


            let foundIds = imagesJson.find(function (imageObject) { return imageObject.id === filteredJson[i].id });

            let article = `<article><li><img class="image1" src=" ${foundIds.src}" alt="repoImage"><header><h2>${filteredJson[i].name}</h2>
                    </header><p> ${filteredJson[i].description}</p></li>
                    <li><button><a href=" ${filteredJson[i].html_url} " target=_blank>Github Repo</a></button>
                    <button><a href=" ${filteredJson[i].homepage} " target=_blank>Play Game</a></li></article>`;


            portfolio.appendChild(createResumeUl(article));

        }

    } else {
        console.log('HTTP-Error: ' + responseRepos.status);
        portfolio.innerHTML += `Sorry could not load Github Repos ${responseRepos.status}`;
    }
}
getRepos();