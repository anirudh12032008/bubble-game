var clutter = ''

for (let i = 0; i < 126; i++) {
    random = Math.floor(Math.random()*10)
    clutter += `<div class='bubble'> ${random} </div>`
}
var bottom = document.querySelector("#btm")
bottom.innerHTML = clutter