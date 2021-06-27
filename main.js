function AddClock() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    if(seconds < 0){
        seconds = "0" + seconds
    }

    let clock = `${hours + ''} : ${ minutes } : ${ '' + seconds}`

    document.getElementById('Clock').innerHTML = clock
}

setInterval(AddClock, 1000)
