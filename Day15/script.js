const dropBox = document.querySelector(".dropzone")
const upload = document.querySelector(".upload")
const input = document.querySelector(".input")

const filename = document.querySelector(".filename")
const buttonUpload = document.querySelector('.upload-btn')


dropBox.addEventListener("drop", (e) => {
	e.preventDefault()
	
	input.files = e.dataTransfer.files;
    
    filename.innerText = input.files[0].name
    upload.style.opacity = 0
    progress()
})

dropBox.addEventListener("dragover", (e) => {
	e.preventDefault()
})


function progress() {
    buttonUpload.addEventListener('click', (e) => {
        document.querySelector(".bar").classList.add("active")
        filename.style.opacity = 0
        document.querySelector(".syncing").classList.add("active")
        document.querySelector(".done").classList.add("active")
    })
}
    

