const container = document.getElementById('container')


function importDays(start, end) {
    for (let i = start; i < end + 1; i++) {
        let day = start < 10? `0${start}`: start

        container.innerHTML += `
            <div class="card">
                <h2 class="num">${day}</h2>
                <div class="info">
                    <h3>Day ${day}</h3>
                    <a href="Day${day}/index.html">
                        <button type="button">Go to Site</button>
                    </a>
                </div>
            </div>
        `

        start++
    }
}

importDays(1, 90)  // CHANGE //
