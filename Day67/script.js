const PTop = document.querySelector('.top')
const shadow = document.querySelector('.shadow')

for (let i = 1; i <= 12; i++) {
	PTop.innerHTML += `<div class="triangle triangle-${i}"></div>`
    shadow.innerHTML += `<div class="triangle triangle-${i}"></div>`
}

for (let i = 1; i <= 12; i++) {
    nullBase = i - 1
    degree = 30 * nullBase

    const shadowT = document.querySelector(`.shadow .triangle-${i}`)
    shadowT.style.transform = `rotateZ( ${degree}deg ) rotateX(-24deg) translateY(-1px)`

    const TopT = document.querySelector(`.top .triangle-${i}`)
    TopT.style.transform = `rotateZ( ${degree}deg ) rotateX(-24deg)`
}

for (let i = 1; i <= 6; i++) {
    const TopT = document.querySelector(`.top .triangle-${i * 2}`)
    TopT.style.borderColor = `transparent transparent #804E49 transparent`
}
