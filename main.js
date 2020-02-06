const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    
    //Remove current class
    current.classList.remove('current');

    //Check for next slide
    if(current.nextElementSibling)
    {
        //Add current to next Sibling
        current.nextElementSibling.classList.add('current');
    }
    else
    {
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout( ()=> current.classList.remove('current') );
}

const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    
    //Remove current class
    current.classList.remove('current');

    //Check for next slide
    if(current.previousElementSibling)
    {
        //Add current to prev Sibling
        current.previousElementSibling.classList.add('current');
    }
    else
    {
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout( ()=> current.classList.remove('current') );
}

//Add events to buttons

next.addEventListener('click', e=> {
    nextSlide();
});

prev.addEventListener('click', e=> {
    prevSlide();
});