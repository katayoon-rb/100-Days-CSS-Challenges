const form = document.querySelector('.form')

for (let i = 1; i <= 18; i++) {
	form.innerHTML += `<div class="ellipse ellipse-${i}"></div>`
}

for (let i = 1; i <= 18; i++) {
    const ellipse = document.querySelector(`.ellipse-${i}`)

	ellipse.style.animation = `ellipse-${i} 5s ease-in-out infinite`
}