const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if(scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active');
    }
})