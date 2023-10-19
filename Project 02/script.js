let circles = document.querySelectorAll('.circle');
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let progress = document.querySelector('#progress');
let currentValue = 0;
let currentCircle = 0;

Array.from(circles).forEach((circle, index) => {
    circle.style = `left:${index * (100 / 3)}%`;
})

nextBtn.addEventListener('click', () => {
    currentValue += (100 / 3);
    currentCircle++;
    circles[currentCircle].classList.add('active-circle');
    updater();
})


prevBtn.addEventListener('click', () => {
    currentValue -= (100 / 3);
    circles[currentCircle].classList.remove('active-circle');
    currentCircle--;
    updater();
})


function updater() {
    progress.style =`width:${currentValue}%`;
    nextBtn.disabled = currentValue >= 99.99 ? true : false;
    prevBtn.disabled = currentValue <= 0 ? true : false;
}