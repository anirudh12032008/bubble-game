var time = 60
var hit = 0
var score = 0
function makeBubble(){
    var clutter = ''
    console.log("abc");
    for (let i = 0; i < 126; i++) {
        let random = Math.floor(Math.random()*10)
        clutter += `<div class='bubble'> ${random} </div>`
    }
    document.querySelector("#btm").innerHTML = clutter
}

function hitValueUpdate(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML = hit
}

function incScore(){
    score = score + 10
    document.querySelector('#score').innerHTML = score
}

function handleRestart(){
    makeBubble()
    time = 60
    score = 0
    hitValueUpdate()
}

function timer() {
    
    var timeinter = setInterval(() => {
        if (time>0) {
            time--
            document.querySelector('#time').innerHTML = time
        }
        else{
            clearInterval(timeinter)
            document.querySelector("#btm").innerHTML = `<h2>Game Over </br> Your score is ${score}</h2><button onclick="handleRestart()" class='restart'>Restart</button>`

        }
    }, 1000);
    
}
document.querySelector('#btm').addEventListener('click',function(dets){
    var clicked_num = Number(dets.target.textContent)
    if(time > 59){
            timer()
    }
    if (clicked_num === hit){
        incScore()
        hitValueUpdate()
        makeBubble()
    }

})
makeBubble()
hitValueUpdate()
