const frame = document.querySelector('.frame')
for (let i = 1; i < 7; i++) {
    frame.innerHTML += `<div class="ring ring-${i}"></div>`
}

const rings = document.querySelectorAll('.ring')
rings.forEach(ring => {
    for (let i = 1; i < 13; i++) {
        ring.innerHTML += `<div class="dot dot-${i}"></div>`
    }
})