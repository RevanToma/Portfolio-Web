
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
function aboutMeArr() {
    let aboutMe = document.createElement('p');
    aboutMe.classList.add('infoSectionPara');
    aboutMe.textContent = loremText;
    aboutMeText.appendChild(aboutMe);
    console.log(aboutMeText)
}

aboutMeArr();
