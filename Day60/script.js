const frame = document.querySelector('.frame')

for (let i = 0; i < 40; i++) {
	frame.innerHTML += `<div class="trigger trigger-${i}"></div>`
}

frame.innerHTML += `
		<div class="plane">
			<div class="text-front">HOVER</div>
		</div>
        <div class="text-back">HOVER</div>
	`


for (let i = 0; i < 40; i++) {
	const trigger = document.querySelector(`.trigger-${i}`)
	const plane = document.querySelector(`.plane`)
	const height = `${i * 10}px`

	trigger.style.top = height

	trigger.addEventListener('mouseover', () => {
		plane.style.height = height
		plane.style.transition = `initial`
	})
	trigger.addEventListener('mouseleave', () => {
		plane.style.height = `200px`
		plane.style.transition = `all 0.4s ease-in-out`
	})
}