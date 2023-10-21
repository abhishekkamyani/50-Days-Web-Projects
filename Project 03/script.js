let openBtn = document.querySelector('#circle-open');
let closeBtn = document.querySelector('#circle-close');
let circle = document.querySelector('#circle');
let content = document.querySelector('article');
let navMenu = document.querySelector('.menu');
let lists = navMenu.querySelectorAll('li');

openBtn.addEventListener('click', () => {
  circle.classList.add('circle-show');
  content.classList.add('rotate-article');

  Array.from(lists).forEach((li, index) => {
    li.style = `left:${(index+1)*40}%; top:${index*30}%; transition-delay: 0.5s;`;
  })

})

closeBtn.addEventListener('click', () => {
  
  Array.from(lists).forEach((li, index) => {
    li.style = `left:${-600}%; top:${index*30}%; transition-delay: 0.1s;`;
    console.log(li);
  })

  circle.classList.remove('circle-show');
  content.classList.remove('rotate-article');
})