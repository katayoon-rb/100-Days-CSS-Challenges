const pics = document.querySelectorAll('.pic')

pics.forEach(pic => {
	pic.addEventListener('click', function() {
		pic.classList.toggle('away')

		pic.classList.remove('away')
		pic.classList.toggle('active')
	})
})
