let isOpen = false;
let searchContainer = document.querySelector('.search-container');

btn.addEventListener('click', () =>{
    if(!isOpen){
        search.classList.add('active');
        searchContainer.classList.add('cursor-normal');
    }
    else{
        search.classList.remove('active');
        searchContainer.classList.remove('cursor-normal');
    }
    isOpen = !isOpen;
})