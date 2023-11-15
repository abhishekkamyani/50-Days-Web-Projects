const container = document.querySelector('.notification-container');
const texts = ['Message One', 'Message Two', 'Message Three', 'Message Four',];
const colors = ['text-1', 'text-2', 'text3', 'text-4'];

btn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.innerText = texts[randomNumber()];
    div.classList.add('notification');
    div.classList.add(colors[randomNumber()]);
    container.append(div);

    setTimeout(() => {
        div.remove();
    }, 3000);    
})


function randomNumber() {
    return parseInt(Math.random()*4);
}