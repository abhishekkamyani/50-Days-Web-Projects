const cards = document.querySelectorAll('.card');

const triggerBottom = window.innerHeight * 0.8;   // 80% of visible area height -> (inner height)

window.addEventListener('scroll', checkCards);

function checkCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        // distance between the top of the card and the top of the page

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    })
}

checkCards();
