const body = document.querySelector('.body');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const scrollAnime = document.querySelector('[data-anima="scroll"]');

const halfWindow = window.innerHeight * .05;

function animeScroll(){
    const topItem = scrollAnime.getBoundingClientRect().top;
    
    const visibleItem = topItem  - halfWindow < 0;

    if (visibleItem){
        scrollAnime.classList.add('show-button');
    }else{
        
        scrollAnime.classList.remove('show-button');
    };

};

window.addEventListener('scroll', animeScroll);



const linkIntern = document.querySelector('[data-scroll="soft"] a[href^="#"]' );

function ScrollTop(event){

    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const anchor = document.querySelector(href);

    anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

    
    
}


linkIntern.addEventListener('click', ScrollTop);










