const slices = document.querySelector('.slices')

for (let i = 1; i <= 8; i++) {
	slices.innerHTML += `<div class="slice slice-${i}"></div>`
}

slices.innerHTML += `
		<div class="text">
			<h1>Slice</h1>
			<h2>transition</h2>
		</div>
	`