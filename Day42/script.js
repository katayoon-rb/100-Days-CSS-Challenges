const stage = document.querySelector('.stage')

for (let i = 0; i < 300; i++){
	stage.innerHTML += `<div class="star star-${i}"></div>`
}

const stars = document.querySelectorAll('.star')
stars.forEach(star => {
    star.style.top = Math.random() * 280 + 'px'
	star.style.left = Math.random() * 280 + 'px'
	star.style.animation = ((Math.random() * 20 + 20) / 10) + 's flickr ' + ((Math.random() * 20) / -10) + 's infinite'
})



for (let i = 0; i < 6; i++){
	stage.innerHTML += `<div class="shooting-star shooting-star-${i}"></div>`
}

const shoots = document.querySelectorAll('.shooting-star')
shoots.forEach(shoot => {
    shoot.style.top = ((Math.random() * 100) - 30) + 'px'
	shoot.style.animation = ((Math.random() * 5) + 20) + 's shooting-star ' + ((Math.random() * 250) / 10) + 's infinite'
})
