
const link = document.getElementById("link");

const randomNumber = () => {
    let number = 0;
    number = Math.random().toString().slice(2,11);

    document.getElementById('numbers').innerHTML = number;
}

const randomColor = () => {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    return color;
}

link.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = randomColor();
})

link.addEventListener('click', () => {
    alert('Hi there please stay safe!');
})

setInterval(randomNumber, 375);