// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//     const btns = card.querySelectorAll('.btn');

//     btns.forEach(btn => {
//         btn.addEventListener('click', toggle)
//     })

//     function toggle() {
//         card.classList.toggle('active');
//     }
// })

// another way
const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.classList.toggle('active');
    })
})