var clutter = ''
var time = 60
var hit = 0
var score = 0
function makeBubble(){

    for (let i = 0; i < 126; i++) {
        let random = Math.floor(Math.random()*10)
        clutter += `<div class='bubble'> ${random} </div>`
    }
    document.querySelector("#btm").innerHTML = clutter
}


function hitValueUpdate(){
    let random = Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML = random
}

function incScore(){
    score = score + 10
    document.querySelector('#score').innerHTML = score
}

function timer() {
    
    var timeinter = setInterval(() => {
        if (time>0) {
            time--
            document.querySelector('#time').innerHTML = time
        }
        else{
            clearInterval(timeinter)
            document.querySelector("#btm").innerHTML = `<h2>Game Over </br> Your score is ${score}</h2>`

        }
    }, 1000);
    
}
makeBubble()
timer()
hitValueUpdate()
