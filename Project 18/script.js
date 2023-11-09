const imagesSrc = ['1.jpg', '2.webp', '3.jpg', '4.jpg', '5.jpg'];
const left = document.querySelector('.left-arrow'); 
const right = document.querySelector('.right-arrow'); 
const slide = document.querySelector('.slide');
let count = 0;

function updateImage() {
    slide.style.backgroundImage = `url(${imagesSrc[count]})`;
    document.body.style.backgroundImage = `url(${imagesSrc[count]})`;
}

updateImage();

right.addEventListener('click', () => {
    count = ++count % imagesSrc.length;
    updateImage();
})

left.addEventListener('click', () => {
    count = --count < 0 ? imagesSrc.length-1 : count;
    updateImage();
})