let portfolio = document.querySelector('#portfolio');
async function getRepos() {
    let repos = "https:api.github.com/users/RevanToma/repos"

    let response = await fetch(repos);

    if (response.ok) {
        let data = await response.json();

        // DOM output here
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].stargazers_count != 0) {

                let article = "<article><header><h2>" + data[i].name + "</h2></header><p>" + data[i].description + "</p>"
                    + "<ul><li><button><a href=" + data[i].html_url + " target=_blank>Github Repo</a></button></li><li><button><a href=" + data[i].homepage
                    + " target=_blank>Deployed App</a></li></ul></article>";

                portfolio.innerHTML += article;
            }
        }


    } else {
        console.log('HTTP-Error: ' + response.status);
    }
}
getRepos();
