const canvas = document.getElementById("field")
const ctx = canvas.getContext("2d")

canvas.width = 900
canvas.height = 500

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
