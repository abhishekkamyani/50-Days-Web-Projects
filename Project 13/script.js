let textInput = document.querySelector('#text');

let tag = document.createElement('div');
let tagsContainer = document.querySelector('.tags-container');

tag.classList.add('tag');
let temp = '';

textInput.addEventListener('input', () => {

    if(tag.innerText.length > 0){
        tagsContainer.appendChild(tag); //will not append, if div is same
    }

    let value = textInput.value;
    if(value[value.length - 1] === '\n'){
        textInput.value = '';
        value += ',';
    }

    temp += value[value.length - 1];   //getting last value of textarea and inserting into temp
    
    if (temp.endsWith(',')) {
        temp = '';
        tag = document.createElement('div');
        tag.classList.add('tag');
    }
    tag.innerText = temp.trimStart();
})