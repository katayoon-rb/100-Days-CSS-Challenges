const frame = document.querySelector('.frame')
frame.innerHTML = `
    <div class="wave wave-back"></div>
    <div class="wave wave-middle"></div>
    <div class="wave wave-front"></div>
`


const waves = document.querySelectorAll('.wave')
waves.forEach(wave => {
    for (let i = 0; i < 10; i++) {
        wave.innerHTML += `<div class="circle"></div>`
    }
})