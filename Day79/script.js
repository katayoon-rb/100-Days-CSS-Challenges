const center = document.querySelector('.center')

for (let i = 1; i <= 10; i++) {
	center.innerHTML += `<div class="line line-${i}"></div>`
}
