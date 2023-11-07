const ring = document.querySelector('.ring')

for (let i = 1; i <= 40; i++) {
	ring.innerHTML += `<div class="line line-${i}"></div>`
}
for (let i = 0; i <= 7; i++) {
	ring.innerHTML += `<div class="number number-${i}">${i * 5}</div>`
}


const lines = document.querySelectorAll(`.line`)
for (let i = 1; i <= 40; i++) {
    if (i % 5 == 1) {
        lines[i - 1].style.transform = `rotate(${9 * (i - 1)}deg) translateY(-61px)`
    }
    else {
        lines[i - 1].style.transform = `rotate(${9 * (i - 1)}deg) translateY(-65px)`
    }
}

for (let i = 0; i <= 7; i++) {
    const number = document.querySelector(`.number-${i}`)

	number.style.transform = `rotate(${45 * i}deg) translateY(-40px)`
}
