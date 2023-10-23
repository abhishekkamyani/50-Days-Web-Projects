window.addEventListener('keydown', (event) => {
    container.innerHTML = `
    <div class="box">
    <p>event.key</p>
    <span>${event.key === ' ' ? 'Space' : event.key}</span>
    </div>
    
    <div class="box">
    <p>event.keyCode</p>
    <span>${event.keyCode}</span>
    </div>
    
    <div class="box">
    <p>event.code</p>
    <span>${event.code}</span>
    </div>
    `    
})