const frame = document.querySelector('.frame')

for (let i = 1; i <= 16; i++) {
	frame.innerHTML += `<div class="ball ball-${i}"></div>`
}


const balls = document.querySelectorAll(`.ball`)

for (let i = 1; i <= 8; i++) {
	balls[i - 1].style.animation = `ball-${i} 6s linear infinite`
}
for (let i = 9; i <= 16; i++) {
	balls[i - 1].style.animation = `ball-${i} 3.5s linear infinite`
}