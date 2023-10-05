document.querySelector('.searchfield').addEventListener('keyup', function() {
	let suggestions = document.querySelector('.suggestions')
	let text = this.value

    if (text.length){
        suggestions.classList.add('active')
        suggestions.innerHTML = `<li><b> ${text} </b></li>
                                <li>Veritatis et <b> ${text} </b></li>
                                <li>ut aliquid ex <b> ${text} </b> vero eos</li>`
    }
    else {
        suggestions.classList.remove('active')
        suggestions.innerHTML = ''
    }
})