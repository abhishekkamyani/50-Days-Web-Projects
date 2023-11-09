function update() {
    const date = new Date();
    let ms = date.getMilliseconds();
    let [hours, minutes, seconds] = date.toLocaleTimeString().split(':');
    let [day, month, currentDate , _] = date.toDateString().split(' ');

    time.innerText = hours + ':' + minutes + ' ' + seconds.split(' ')[1];
    dateNow.innerText = day.toUpperCase() + ', ' + month.toUpperCase();
    circle.innerText = +currentDate;

    // needles
    let secondDeg = +seconds.split(' ')[0] * 6 + 3 * ms / 500;
    let minuteDeg =  minutes * 6;
    let hourDeg = hours * 30 + minutes / 2; 

    hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`; 
    minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`; 
    second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`; 
}

setInterval(update, 100);


toggle.addEventListener('click', () => document.body.classList.toggle('dark'));