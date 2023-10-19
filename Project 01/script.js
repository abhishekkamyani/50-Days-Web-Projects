let cards = document.querySelectorAll('.card');

Array.from(cards).forEach((card, indexA) => {
    card.addEventListener('click', () => {
        card.classList.add('active-card');
        card.querySelector('.text').classList.add('active-text');


        Array.from(cards).forEach((cardB, indexB) => {
            if(indexA !== indexB){
                cardB.classList.remove('active-card');
                cardB.querySelector('.text').classList.remove('active-text');
            }
        })

    })
})
