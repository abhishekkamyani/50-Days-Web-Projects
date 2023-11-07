const remainedSpan = document.querySelector('.remained').querySelector('span');
const cups = document.querySelectorAll('.cup-small');
const percentage = document.querySelector('.percentage');
let count = 0;

const sound = new Audio('pouring-coffee-6743.mp3');

cups.forEach((cup, ind) => {

    cup.addEventListener('mousedown', () => {
        sound.play();
        if (!cup.classList.contains('full')) {
            count = 0;
            for (let i = 0; i <= ind; i++) {
                cups[i].classList.add('full');
                count += 12.5;
            }
        }
        else if (cups[ind + 1].classList.contains('full')) {
            for (let i = ind + 1; i < cups.length && cups[i].classList.contains('full'); i++) {
                cups[i].classList.remove('full');
                count -= 12.5;
            }
        }
        else {
            cup.classList.remove('full');
            count -= 12.5;
        }
        percentage.style.height = `${count}%`
        percentage.innerText = count + '%';
        remainedSpan.innerText = `${2 - count / 100 * 2}L`;
        sound.currentTime = count / 100 * (sound.duration - 1);
        checkSound();
    })
})


async function checkSound() {
    setTimeout(() => {
        sound.pause();
    }, 600);
}