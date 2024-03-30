let navMenu = document.getElementById('nav-menu');
let toggle = document.getElementById('nav-toggle');
let close = document.getElementById('nav-close');

toggle.onclick = function () {

navMenu.classList.add('hello');



};
    


close.onclick = function () { 
    
    navMenu.classList.remove('hello');
    
    }
        
    


let slider = Array.from(document.querySelectorAll('.slider img'));
let length = slider.length;

console.log(length);

let currentSlider = 1;
let sliderNumberElement = document.getElementById('sliderNumber');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.onclick = nextSlider;
prev.onclick = prevSlider;

function nextSlider() {
    console.log('next');
}

function prevSlider() {
    console.log('prev');
}

let pagination = document.createElement('ul');
pagination.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= length; i++) {
    let paginationli = document.createElement('li');
    paginationli.setAttribute('data-slider', i);
    paginationli.appendChild(document.createTextNode(i));
    pagination.appendChild(paginationli);
}

document.getElementById('indicators').appendChild(pagination);















