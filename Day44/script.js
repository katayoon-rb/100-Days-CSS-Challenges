const frame = document.querySelector('.frame')


for (let i = 1; i < 21; i++) {
    const size = 210 - (i * 10)
    const offset = (400 - size) / 2

    frame.innerHTML += `<div class="rect rect-${i}" style="
                            z-index: ${i};
                            width: ${size}px;
                            height: ${size}px; 
                            top: ${offset}px; 
                            left: ${offset}px; 
                            animation: 2s ease-in-out ${i / 30}s infinite alternate none running rotate;
                        "></div>`
    
    
}


const rects = document.querySelectorAll('.rect')

frame.addEventListener('mouseover', () => {
    rects.forEach(rect =>  rect.style.animationPlayState = 'paused' )
})
frame.addEventListener('mouseout', () => {
    rects.forEach(rect =>  rect.style.animationPlayState = 'running' )
})