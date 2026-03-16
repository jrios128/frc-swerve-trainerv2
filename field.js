let obstacles = [
{x:420,y:180},
{x:500,y:300}
]

function drawField(ctx,canvas){

const margin = 20

/* FIELD FLOOR */

ctx.fillStyle="#0b5e20"
ctx.fillRect(0,0,canvas.width,canvas.height)

/* FIELD BORDER */

ctx.strokeStyle="white"
ctx.lineWidth=4
ctx.strokeRect(margin,margin,canvas.width-margin*2,canvas.height-margin*2)

/* CENTER LINE */

ctx.beginPath()
ctx.moveTo(canvas.width/2,margin)
ctx.lineTo(canvas.width/2,canvas.height-margin)
ctx.stroke()

/* SCORING ZONES */

drawScoringZone(80,200,"blue")
drawScoringZone(canvas.width-140,200,"red")

/* LOADING ZONES */

drawLoadingZone(80,80,"blue")
drawLoadingZone(canvas.width-140,canvas.height-140,"red")

/* MIDFIELD OBSTACLES */

drawObstacle(canvas.width/2-40,180)
drawObstacle(canvas.width/2+20,300)

}

function drawScoringZone(x,y,color){

ctx.fillStyle=color
ctx.globalAlpha=0.3

ctx.fillRect(x,y,80,100)

ctx.globalAlpha=1

ctx.strokeStyle=color
ctx.strokeRect(x,y,80,100)

}

function drawLoadingZone(x,y,color){

ctx.fillStyle=color
ctx.globalAlpha=0.2

ctx.fillRect(x,y,60,60)

ctx.globalAlpha=1

ctx.strokeStyle=color
ctx.strokeRect(x,y,60,60)

}

function drawObstacle(x,y){

ctx.fillStyle="#777"

ctx.fillRect(x,y,60,60)

ctx.strokeStyle="black"
ctx.strokeRect(x,y,60,60)

}
