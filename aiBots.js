let defenders = [
{ x:450, y:120, type:"lane" },
{ x:450, y:380, type:"lane" }
]

let defenderSpeed = 0.05

function updateDefenders(){

defenders.forEach(bot=>{

if(bot.type==="lane"){
updateLaneBlocker(bot)
}

})

}

function updateLaneBlocker(bot){

let targetY = robot.y

let dy = targetY - bot.y

bot.y += dy * defenderSpeed

let margin = 40

if(bot.y < margin) bot.y = margin
if(bot.y > canvas.height - margin) bot.y = canvas.height - margin

}

function drawDefenders(ctx){

ctx.fillStyle="red"

defenders.forEach(bot=>{

ctx.save()

ctx.translate(bot.x,bot.y)

ctx.fillRect(-20,-20,40,40)

ctx.restore()

})

}
