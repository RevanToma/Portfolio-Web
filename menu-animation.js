const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('.menu ul');
const selectAllAnchors = document.querySelectorAll('ul li a[href^="#"]');


// smooth scroll animation when navigating
selectAllAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });
});


// set event to HTML document for 'active' class toggle on anchors.
// set anchor to a number and check if the clicked anchor === number ? toggle : remove.
document.addEventListener("DOMContentLoaded", () => {

    const home = document.querySelector('.home');
    home.classList.toggle('active');
    if (selectAllAnchors) {


        selectAllAnchors.forEach((anchor, key) => {

            anchor.addEventListener('click', () => {
                console.log(anchor);
                home.classList.remove('active');
                anchor.classList.toggle("active");

                console.log(key);
                selectAllAnchors.forEach((anchors, number) => {
                    if (key !== number) {
                        anchors.classList.remove('active');
                    }
                });
            });
        });
    }
});




// hamburger menu.
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

});
// hide menu after clicking on a link or/ clicking outside the menu
window.document.addEventListener('mouseover', (e) => {
    if (e.target !== menuBtn && e.target !== menu) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }

});


// sticky navbar when scrolling.
window.addEventListener('scroll', () => {
    let menuSticky = document.querySelector('nav');
    menuSticky.classList.toggle('sticky', window.scrollY > 0);

});

const loadingg = document.querySelector('.loading');
const services = document.querySelector('#services');

services.innerHTML += `<article><header><h2>Services not available at this moment. Please revisit 2024 when im done with my education!
                        </h2></header></article> `;











// menuA.forEach(a => {
//     a.addEventListener('click', (e) => {
//         e.stopPropagation();
//         const active = document.querySelector('active');

//         if (active) {

//             e.currentTarget.classList.remove('active');
//         }
//         e.currentTarget.classList.add('active');
//     });
// });







// NOT POSSIBLE WITH UNDER PAGES??

// possible to highlight menu a by current location?
// maybe with a loop + checking current location on window?
// const currentLocation = location.pathname;
// const menuHighlight = document.querySelectorAll('.menu a');
// const menuLength = menuHighlight.length;
// console.log(menuLength);

// for (let i = 0; i < menuHighlight.length; i++) {
//     //check if menu anchors href match current location href?
//     if (menuHighlight[i].pathname === currentLocation) {
//         menuHighlight[i].className = 'active';
//     }

// }




// add another event listener for scroll
// window.addEventListener('scroll', navHighlight);

// const sections = document.querySelectorAll('section[id]');
// function navHighlight() {
//     // current scroll position
//     let scrollY = window.pageYOffset;

//     //loop thru all sections
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop;
//         let sectionId = current.getAttribute('id');

//         //if current scroll position enter the space where current seciton on screen is
//         //add active class else remove it
//         if (scrollY > sectionTop && scrollY <= sectionHeight) {
//             document.querySelector('.menu li a[href*=' + sectionId + ']').classList.add('active');

//         } else {
//             document.querySelector('.menu li a[href*=' + sectionId + ']').classList.remove('active');
//         }

//     });
// }


// let menuItems = document.querySelectorAll('.menu ul li a');

// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('active');
//     menu.classList.toggle('active');

// });

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.menu a').forEach(link => {
//     if (link.href.includes(`${activePage}`)) {
//         link.classList.add('active');
//     }

// })

// document.onclick = (e) => {
//     if (e.target.classList !== menuBtn && e.target.classList !== menu) {
//         menuBtn.classList.remove('active');
//         menu.classList.remove('active');
//     }
// }


