let count = 0;
let d = document.getElementById('count')

function calculate(thing) {
    d.classList = "count"
    setTimeout(() => d.classList.add(thing), 5)
    setTimeout(() => {
        if (thing == 'adding') { count++ }
        if (thing == 'subtracting') { count-- }
        d.innerHTML = count
    }, 150)
}