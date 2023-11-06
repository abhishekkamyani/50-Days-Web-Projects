let btn = document.querySelector('#btn');
let menu = document.querySelector('#navigation');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})