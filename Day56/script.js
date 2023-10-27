const flower = document.querySelector('.flower')
for (let i = 0; i <= 15; i++){
    flower.innerHTML += `<div class="leaf leaf-${i}"></div>`
}
flower.innerHTML += `<div class="dot"></div>`