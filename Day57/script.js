const ikosaeder = document.querySelector('.ikosaeder')
for (let i = 1; i <= 20; i++) {
    ikosaeder.innerHTML += `<div class="side side-${i}"></div>`
}

const sides = document.querySelectorAll('.side')
for (let i = 1; i < 6; i++) {
    let side = sides[(i + 1) * 2]
    side.style.borderColor = `transparent transparent #e1e1e1 transparent`
}
for (let i = 13; i <= 20; i++) {
    sides[i - 1].style.borderColor = `#fff transparent transparent transparent`
}
