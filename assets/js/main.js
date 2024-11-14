// menu affichage

const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'), 
    navClose = document.getElementById('nav-close');

// affiche menu

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
// masque  le menu

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

// masque menu mobile

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change fond Header

const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
} 

window.addEventListener('scroll', blurHeader)

// mail JS

const contactForm = document.getElementById('contact-form'), 
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {

    e.preventDefault();
    console.log(e)

    emailjs.sendForm('', 'template_mp3jsob', '#contact-form', 'na19JE-5UmnWbzFoy')
    .then(() =>{
        contactMessage.textContent = 'Message envoyer avec success ✅'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()

    }, () =>{
        contactMessage.textContent = 'Erreur non envoye ❌' 
    })
}

contactForm.addEventListener('submit', sendEmail);

// show scroll

const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollup)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })  
}

window.addEventListener('scroll', scrollActive)


// scroll animation

const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
        
    }
)

sr.reveal(`.home__data, .home__social, .contact__container , .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.home__data`, {origin: 'top'})

sr.reveal(`.about__image, .skills__data`, {origin: 'left'})
sr.reveal(`.about__data, .skills__content`, {origin: 'right'})

sr.reveal(`.services__card, .projects__card`, {interval: 100})