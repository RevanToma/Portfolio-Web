
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

let resume = fetch('resume.JSON').then(response => {
    return response.json();
}).then(resume => {
    // do something with the data here
    console.log(resume.myInformation);
    // const resumeInfo = document.querySelector('.portfolioInfo').textContent = JSON.stringify(resume);
    // const lis = document.createElement('li')
    // lis.innerHTML = resumeInfo;
    // resumeInfo.appendChild(li);   


});
