const dots = document.querySelector('.dots')

for (let i = 1; i < 20; i++) {
	dots.innerHTML += `<div class="dot dot-${i}"></div>`
}