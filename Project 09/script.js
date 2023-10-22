const audios = document.querySelectorAll('audio');
let currentPlaying = audios[0];


audios.forEach(audio => {
    const btn = document.createElement('button');
    btn.innerText = audio.src.substring(audio.src.indexOf('sounds/') + 7, audio.src.indexOf('.m'))
    
    btn.addEventListener('click', () => {
        currentPlaying.pause();
        currentPlaying.currentTime = 0;
        currentPlaying = audio;
        audio.play();
    });
    buttons.appendChild(btn);
})