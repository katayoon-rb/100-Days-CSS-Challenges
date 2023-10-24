for (let i = 1; i <= 10; i++){
    document.querySelector('.frame').innerHTML += `<div class="ring ring-${i}"></div>`
}

document.querySelectorAll('.ring').forEach(ring => {
    let i = ring.classList[1].split('-')[1]
    for (let j = 1; j <= 12 + (i * 6); j++){
        ring.innerHTML += `<div class="dot dot-${j}"><div class="fill"></div></div>`
    }
})