const frame = document.querySelector('.frame')

frame.innerHTML += `<div class="space"></div>`

for (let i = 1; i <= 380; i++) {
	frame.innerHTML += `<div class="trigger trigger-${i}"></div>`
}

frame.innerHTML += `<div class="lines"></div>`
const lines = document.querySelector('.lines')
for (let i = 1; i <= 19; i++) {
	lines.innerHTML += `
        <div class="line line-${i}">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    `
}