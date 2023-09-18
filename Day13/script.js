const detail = document.querySelector('.detail')
const profiles = document.querySelectorAll('.profile')
const closes = document.querySelectorAll('.close')

profiles.forEach( profile => {
		profile.addEventListener('click', function() {
			detail.classList.add('active')
		})
}) 


closes.forEach( close => {
		close.addEventListener('click', function() {
			detail.classList.remove('active')
		})
}) 