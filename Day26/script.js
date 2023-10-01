let active = 1

document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', () => {
        const activeCard = document.querySelector('.card:nth-child(' + active + ')')

        activeCard.classList.remove('active')
        activeCard.classList.add('inactive')

        if (active == 3) { active = 0 }
        active++

        const activeCardPlus = document.querySelector('.card:nth-child(' + active + ')')

        activeCardPlus.classList.remove('inactive')
        activeCardPlus.classList.add('active')
    })
})
