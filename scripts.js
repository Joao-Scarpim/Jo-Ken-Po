const images = [
    '<img src="./img/papel.png" id="papel">',
    '<img src="./img/pedra.png" id="pedra">',
    '<img src="./img/tesoura.png" id="tesoura">',]

const winner = document.querySelector('.main-div h1')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const again = document.querySelector('.again')



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function clicar(event) {
    if(winner.textContent == "JO KEN PO!" || winner.textContent == ""){
        winner.textContent = "JO KEN PO!"
        player.innerHTML = `<img src="./img/${event.target.id}.png" id="${event.target.id}">`
        computer.innerHTML = `${images[getRandomInt(0, 3)]}` // Pega um elemento aleatório da array images

        if(event.target.src == undefined) {
            player.innerHTML = '<div class="player"></div>'
            computer.innerHTML = '<div class="computer"></div>'
        } else {
            if(computer.innerHTML == player.innerHTML) {
                setTimeout(winner.textContent = "Empate!!!", 2000)
            } else if(computer.innerHTML == images[0] &&  player.innerHTML == images[1] || computer.innerHTML == images[1] && player.innerHTML == images[2]){
                winner.textContent = "Computer Wins!"
            } else if(computer.innerHTML == images[2] && player.innerHTML == images[0]) {
                winner.textContent = "Computer wins"
            } else if(computer.innerHTML == images[1] &&  player.innerHTML == images[0] || computer.innerHTML == images[2] && player.innerHTML == images[1]) {
                    winner.textContent = "Player Wins"
            } else if(computer.innerHTML == images[0] && player.innerHTML == images[2]) {
                    winner.textContent = "Player Wins"
            }}
            setTimeout(() => {
                again.innerHTML = "<button>Again</button>"
            }, 1500)

    }
    
    
    
}

function restart() {
    winner.innerHTML = "JO KEN PO!"
    player.innerHTML = '<div class="player"></div>'
    computer.innerHTML = '<div class="computer"></div>'
    again.innerHTML = ""
}

const imgs = document.querySelector('.imgs')
imgs.addEventListener("click", clicar)
again.addEventListener("click", restart)
