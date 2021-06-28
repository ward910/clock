function AddClock() {
    const now = new Date() // objeto data
    const hours = now.getHours() // hora
    const minutes = now.getMinutes() // minutos
    const seconds = now.getSeconds() // segundos

    if(seconds < 0){
        seconds = "0" + seconds
    }

    let clock = `${hours + ''} : ${ minutes } : ${ '' + seconds}`

    document.getElementById('Clock').innerHTML = clock
}

// A função vai ser chamada a cada 1000 milesegundos
setInterval(AddClock, 1000)
