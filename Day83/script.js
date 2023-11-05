const warp = document.querySelector('.warp')

for (let i = 1; i <= 30; i++) {
    const ring = document.createElement('div')
    ring.classList.add('ring')

    ring.style.animationDelay = (i-1) * (4/30) * -1+'s'


    for (let j = 1; j <= 24; j++) {
        const stripe = document.createElement('div')
        stripe.classList.add('stripe')

        const degree = 360 / 24 * (j - 1) - Math.random() * 10
        const offset = 100 - (Math.random() * 40)
        stripe.style.transform = 'rotate('+degree+'deg)' + 'translate3d(0,'+offset+'px,0)' + 'scaleY('+offset/100+')';
        
        ring.appendChild(stripe)
    }

    warp.appendChild(ring)
}