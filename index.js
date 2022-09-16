
//variables
let painting = document.querySelector(".painting")
let userColor = "blue"

//Allow user to change colors
let greenColor = document.querySelector('#green')
greenColor.addEventListener('click', function(e) {
    userColor = "green"
})

let blueColor = document.querySelector('#blue')
blueColor.addEventListener('click', function(e) {
    userColor = "blue"
})

let redColor = document.querySelector('#red')
redColor.addEventListener('click', function(e) {
    userColor = "red"
})

let yellowColor = document.querySelector('#yellow')
yellowColor.addEventListener('click', function(e) {
    userColor = "yellow"
})


//listen for user clicks
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = userColor
})

painting.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = userColor
})
