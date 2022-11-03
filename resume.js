
const showLess = document.querySelector('.showLess');
const aboutMeButton = document.querySelector('.moreAboutMe');
let resumeInfo = document.querySelector('.resumeInfo');
const skillSection = document.querySelector('.skillSection');
const personalInfo = document.querySelector('.personalInfo');
showLess.style.display = 'none';


aboutMeButton.addEventListener('click', () => {

    getResume();
    resumeShowLess();
    skillSection.style.visibility = 'hidden';
    personalInfo.style.visibility = 'hidden';
    // aboutMeButton.setAttribute('disabled', '');
    aboutMeButton.style.display = 'none';
    showLess.style.display = '';




});

function resumeShowLess() {
    showLess.addEventListener('click', () => {

        location.reload();
    });
}



async function getResume() {

    let resume = "./resume.json"
    let response = await fetch(resume);

    let data = await response.json();
    if (response.ok) {
        // DOM output here
        // skapa en lista some innehåller varje object
        // exempel, li * utbildningar > {alla key values}, ny li*ny utbdilning > {alla key values}     




        for (let myInfo of data.myInformation) {

            let myPersonalInformation = "<ul><h3>" + myInfo.name + "</h3><li><a href=" + myInfo.url + " target=_blank>Portfolio Page</a></li><li>Email: " +
                myInfo.email + "</li><li>Phone Num: " + myInfo.phone + "</li><li>Label: " + myInfo.label + "</li><li>City: "
                + myInfo.location.region + "</li><p>" + myInfo.location.address + "</p><p>Postal-Code: " + myInfo.location.postalCode + "</p><p>Region : "
                + myInfo.location.city + "</p></ul>";

            resumeInfo.innerHTML += myPersonalInformation;

        }
        for (let job of data.jobs) {

            let Job = "<ul><h3>Job: " + job.name + "</h3><p>Position: " + job.position + "<p><p>Start date: "
                + job.startDate + "</p><p>End date: " + job.endDate + "</p><p>Position: "
                + job.position + "</p></ul>";
            resumeInfo.innerHTML += Job;


        }


        for (let datas of data.educations) {


            let Educations = "<ul><h3>" + datas.institution + "</h3><li><a href=" + datas.url + " target=_blank>URL</a></li><li>Education: " +
                datas.education + "</li><p>Start date: " + datas.startDate + "</p><p>End date: " + datas.endDate + "</p><p>Position: "
                + datas.position + "</p></ul>";
            resumeInfo.innerHTML += Educations;
        }
        for (let skill of data.skills) {


            let Skill = "<ul><h3>Skills: " + skill.name + "</h3><p>Level: " + skill.level + "</p><li>Keywords : " +
                skill.keywords + "</li><p><li>Competence: " + skill.competence + "</li></ul>";

            resumeInfo.innerHTML += Skill;

        }
        for (let language of data.languages) {


            let Language = "<ul><h3>Languages:</h3><p>Name : " + language.language + "</p><p>Fluency : " + language.fluency + "</p></ul>";

            resumeInfo.innerHTML += Language;

        }
        for (let interest of data.interests) {

            let Interest = "<ul><h3>Interests: </h3><li>" + interest.keywords[0] + "</li><li>" + interest.keywords[1] + "</li><li>"
                + interest.keywords[2] + "</li><li>" + interest.keywords[3] + "</li></ul>";


            resumeInfo.innerHTML += Interest;

        }

    }

}

