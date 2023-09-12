const searchButton = document.querySelector(".search");
const search = document.querySelector(".search-bar");
const menuButton = document.querySelector(".menu-bar")
const menu = document.querySelector(".menu")
const home = document.querySelector(".home")

searchButton.addEventListener("click", () => {
	if (search.classList.contains("active")){
		search.classList.remove("active");
		return;
	}
		search.classList.add("active");
})


menuButton.addEventListener("click", ()=> {
	menu.classList.toggle("show")
	home.classList.toggle("move")
})