
const showLess = document.querySelector('.showLess'); // Show  less button for resume section.
const aboutMeButton = document.querySelector('.moreAboutMe'); // Show resume button.
const resumeInfo = document.querySelector('.resumeInfo'); // Resume info article.
const skillSection = document.querySelector('.skillSection'); // Skill section.
const personalInfo = document.querySelector('.personalInfo'); // Default personal info display when resume info is not showing.


showLess.style.display = 'none';

// Load my resume json on DOM on click.
// Hide other unnecessary elements
// Someway to load json resume only once? toggle show/hide only after that ? faster than reloading it?
aboutMeButton.addEventListener('click', () => {
    getResume();
    skillSection.style.visibility = 'hidden';
    personalInfo.style.visibility = 'hidden';
    aboutMeButton.style.display = 'none';
    showLess.style.display = '';
    resumeShowLess(); // Hide resume after loading it once.

});

// hide the resume json information.
function resumeShowLess() {

    showLess.addEventListener('click', () => {
        resumeInfo.innerHTML = '';
        skillSection.style.visibility = '';
        personalInfo.style.visibility = '';
        showLess.style.display = 'none';
        aboutMeButton.style.display = '';

    });
}



async function getResume() {

    let resume = "./resume.json";
    let response = await fetch(resume);

    let data = await response.json();
    if (response.ok) {
        // DOM output here
        // skapa en lista some innehåller varje object
        // exempel, li * utbildningar > {alla key values}, ny li*ny utbdilning > {alla key values}     




        for (let myInfo of data.myInformation) {

            let myPersonalInformation = `<ul><h3>  ${myInfo.name} </h3><li><a href=" ${myInfo.url} " target=_blank>Portfolio Page</a></li><li>Email: ${myInfo.email}</li>
            <li>Phone Num: ${myInfo.phone} </li><li>Label: ${myInfo.label} </li><li>City: ${myInfo.location.region} </li><p> ${myInfo.location.address} </p>
            <p>Postal-Code: ${myInfo.location.postalCode} </p><p>Region: ${myInfo.location.city}</p></ul>`;

            resumeInfo.innerHTML += myPersonalInformation;

        }
        for (let job of data.jobs) {

            let Job = `<ul><h3>Job:${job.name}</h3><li>Position: ${job.position}</li><li>Start date: ${job.startDate}</li><li>End date: ${job.endDate}</li><li>Position: ${job.position}
            </li></ul>`;
            resumeInfo.innerHTML += Job;


        }


        for (let datas of data.educations) {


            let Educations = `<ul><h3> ${datas.institution} </h3><li><a href=" ${datas.url} " target=_blank>URL</a></li><li>Education: ${datas.education}</li>
            <li>Start date: ${datas.startDate}</li><li>End date: ${datas.endDate}</li><li>Position: ${datas.position}</li></ul>`;

            resumeInfo.innerHTML += Educations;
        }
        for (let skill of data.skills) {


            let Skill = `<ul><h3>Skills: ${skill.name}</h3><p>Level: ${skill.level}</p><li><em>Keywords:</em> ${skill.keywords}</li><p><li><em>Competence:</em>
             ${skill.competence}</li></ul>`;

            resumeInfo.innerHTML += Skill;

        }
        for (let language of data.languages) {


            let Language = `<ul><h3>Language:</h3><li>Name:  ${language.language}</li><li>Fluency : ${language.fluency}</li></ul>`;

            resumeInfo.innerHTML += Language;

        }
        for (let interest of data.interests) {

            let Interest = `<ul><h3>Interests:</h3><li> ${interest.keywords[0]} </li><li> ${interest.keywords[1]} </li><li> ${interest.keywords[2]}</li>
            <li> ${interest.keywords[3]} </li><li> ${interest.keywords[4]} </li></ul> `;


            resumeInfo.innerHTML += Interest;


        }

    }

}

