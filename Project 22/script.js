const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


canvas.width = window.innerWidth - window.innerWidth*0.4;
if(window.innerWidth < 765){
    canvas.width = window.innerWidth - window.innerWidth*0.1;
}

const ctx = canvas.getContext('2d');

// intial values 
let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);

        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //from this
    ctx.lineTo(x2, y2); //to this
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


increaseBtn.addEventListener('click', () => {
    if (size < 50) {
        size += 5;
        sizeEL.innerText = size;
    }
})

decreaseBtn.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        sizeEL.innerText = size;
    }
})

colorEl.addEventListener('change', () => color = colorEl.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height));