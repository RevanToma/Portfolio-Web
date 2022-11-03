let menuBtn = document.querySelector('#menuBtn');
let menu = document.querySelector('.menu ul');
let menuA = document.querySelector('nav.menu a');
document.querySelectorAll('ul li a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"

        });
    });
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

});

window.

    document.addEventListener('click', (e) => {
        if (e.target !== menuBtn && e.target !== menu) {
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
        }

    })






window.addEventListener('scroll', () => {
    let menuSticky = document.querySelector('nav');
    menuSticky.classList.toggle('sticky', window.scrollY > 0);

});

const sections = document.querySelectorAll('section[id]');

// add another event listener for scroll
// window.addEventListener('scroll', navHighlight);






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


