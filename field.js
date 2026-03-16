function drawField(ctx,canvas){

ctx.fillStyle="#0b5e20"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle="white"
ctx.lineWidth=4

ctx.strokeRect(20,20,canvas.width-40,canvas.height-40)

ctx.beginPath()
ctx.moveTo(canvas.width/2,20)
ctx.lineTo(canvas.width/2,canvas.height-20)
ctx.stroke()

}
