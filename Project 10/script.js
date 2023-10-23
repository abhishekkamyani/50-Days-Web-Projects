btn.addEventListener('click', update);

async function update() {
    const config = {
        headers: {
          Accept: 'application/json', // we want to accept data in JSON format from the server/.
        },
      }

    const respsone = await fetch('https://icanhazdadjoke.com', config);
    const data = await respsone.json();
    joke.innerText = data.joke;
}

update();