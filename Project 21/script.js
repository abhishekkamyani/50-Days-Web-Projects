const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

function dragStart() {
    this.className += ' hold'; //add hold class
    setTimeout(() => this.className = ' ', 0);  //for background - all classes will be removed
}

function dragEnd() {
    this.className = 'fill';
}

for(const empty of empties) {
    empty.addEventListener('dragover' , dragOver)
    empty.addEventListener('dragleave' , dragLeave)
    empty.addEventListener('drop' , dragDrop)
}

// for arrow on the box
function dragOver(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(e) {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.classList.remove('hovered');
    this.append(fill);
}