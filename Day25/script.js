const marker = document.querySelector('.marker')
const card = document.querySelector('.card')

marker.addEventListener('click', function() {
	card.classList.add('active')
	marker.classList.remove('inactive')
})

card.addEventListener('click', function() {
	card.classList.remove('active')
	marker.classList.remove('inactive')
})