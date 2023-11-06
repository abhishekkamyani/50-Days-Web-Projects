const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let targetValue = counter.getAttribute('data-target');
   
    let i = parseInt(targetValue/200);
    const timer = setInterval(() => {
        counter.innerText = i;
        i += parseInt(targetValue/200);
        
        if(i > targetValue){
            clearInterval(timer);
            counter.innerText = targetValue;
        }
    }, 1);
})