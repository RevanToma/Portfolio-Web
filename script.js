
const loremText = [`Lorem, ipsum dolor sit amet consectetur adipisicing elit, 
Cupiditate voluptates quam inventore tempora eveniet necessitatibus quibusdam aliquid
ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates quam inventore.
tempora eveniet necessitatibus quibusdam aliquid id neque cumque aut explicabo fugiat
voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit, 
Cupiditate voluptates quam inventore tempora eveniet necessitatibus quibusdam aliquid
ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates quam inventore.
tempora eveniet necessitatibus quibusdam aliquid id neque cumque aut explicabo fugiat
voluptate.`];

const aboutMeText = document.querySelector('.aboutMeText');
const aboutMeButton = document.querySelector('.moreAboutMe');

aboutMeButton.addEventListener('click', () => {

    const aboutMe = document.createElement('p');
    aboutMe.classList.add('infoSectionPara');
    aboutMe.textContent = loremText;
    aboutMeText.appendChild(aboutMe);

    if (aboutMeButton) {
        aboutMeButton.setAttribute('disabled', '');
        aboutMeButton.innerHTML = 'show less';
    }

});



let portfolio = document.querySelector('#portfolio');


async function getRepos() {
    let url = "https:api.github.com/users/RevanToma/repos"
    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        // DOM print out.

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