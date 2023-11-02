const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
const triggers = document.querySelector('.triggers')

for (let val = 0; val < abc.length; val++) {
	triggers.innerHTML += `
        <input type='radio' name='morse' id='morse-${abc[val]}' class="radio">
        <label for='morse-${abc[val]}' class="trigger" id="label-${abc[val]}">${abc[val]}</label>
    `
}

triggers.innerHTML += `<div class="light"></div>`
