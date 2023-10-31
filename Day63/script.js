const frame = document.querySelector('.frame')

for (let i = 1; i <= 50; i++) {
	frame.innerHTML += `<div class="circle circle-${i}"></div>`
}

for (let i = 1; i <= 50; i++) {
    const circle = document.querySelector(`.circle-${i}`)

	circle.style.animation = `circle 10s ease-in-out ${i / -5}s infinite both`
    circle.style.zIndex = i
}