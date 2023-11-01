const sparkles = document.querySelector('.sparkles')

for (let i = 1; i <= 12; i++) {
	sparkles.innerHTML += `<div class="sparkle sparkle-${i}"></div>`
}

for (let i = 1; i <= 12; i++) {
    const nullBase = i - 1
    const degree = 30 * nullBase
    
    const sparkle = document.querySelector(`.sparkle-${i}`)
    sparkle.style.opacity = `0`

    const checkbox = document.getElementById('cb-1')
    checkbox.addEventListener('click', () => {

        if (checkbox.checked) {
            sparkle.style.transform = `rotate( ${degree}deg ) translateY(-50px) scaleY(1)`
            sparkle.style.opacity = `1`
            sparkle.style.transition = `all .2s ease-in-out`

            setInterval(() => { sparkle.style.opacity = `0` }, 800);
        }

        else {
            sparkle.style.transform = `rotate( ${degree}deg ) translateY(-50px) scaleY(0)`
        }

    })
    
}