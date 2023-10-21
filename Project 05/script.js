// for (let i = 0; i <= 100; i++) {
//     setTimeout(() => {
//         loading.innerText = i;
//     }, 1000+i);
// }

let count = 0;

let iteratorId = setInterval(function() {
    loading.innerText = `${count++}%`;
    count > 100 && clearInterval(iteratorId);
}, 20);