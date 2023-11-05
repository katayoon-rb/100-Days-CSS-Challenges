const wave = document.querySelector('.wave')

for (let i = 1; i <= 200; i++) {
	wave.innerHTML += `<div class="dot dot-${i}"></div>`
}


for (let i = 1; i <= 200; i++) {
    const dot = document.querySelector(`.dot-${i}`)
    let offset

    if (i < 100) { offset = i * i / 70 }
    else { offset = (200 - i) * (200 - i) / 70 }

    dot.animate(
        [
            { transform: `translateY(-${offset}px)` },
            { transform: `translateY(${offset}px)` },
            { transform: `translateY(-${offset}px)` }
        ],
        {
            duration: 3000,
            iterations: Infinity
        }
    )
}
