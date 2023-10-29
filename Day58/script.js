const form = document.querySelector('.form')

for (let i = 1; i <= 19; i++) {
	form.innerHTML += `<div class="slice slice-${i}"></div>`
}
