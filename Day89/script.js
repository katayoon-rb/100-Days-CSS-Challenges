const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

for (let i = 1; i <= 100; i++) {
	horizontal.innerHTML += `<div class="stripe stripe-${i}"></div>`
	vertical.innerHTML += `<div class="stripe stripe-${i}"></div>`
}