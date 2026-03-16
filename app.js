const canvas = document.getElementById("field")
const ctx = canvas.getContext("2d")

function resizeCanvas(){

canvas.width = window.innerWidth
canvas.height = window.innerHeight * 0.6

}

resizeCanvas()

window.addEventListener("resize", resizeCanvas)

function update(){

readKeyboard()

readGamepad()

readMobileControls()
  
updateRobot()

updateDefenders()

handleCollisions()

checkTargets()

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

drawField(ctx,canvas)

drawTargets(ctx)

drawDefenders(ctx)

drawRobot(ctx)

drawScore()

}

function loop(){

update()

draw()

requestAnimationFrame(loop)

}

loop()
