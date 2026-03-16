let defenders = [
{x:300,y:200},
{x:650,y:300}
]

function updateDefenders(){

defenders.forEach(bot=>{

let futureX = robot.x + robot.vx*30
let futureY = robot.y + robot.vy*30

let dx = futureX - bot.x
let dy = futureY - bot.y

bot.x += dx * 0.02
bot.y += dy * 0.02

avoidObstacles(bot)

})

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
function avoidObstacles(bot){

obstacles.forEach(o=>{

let dx = bot.x - o.x
let dy = bot.y - o.y

let dist = Math.sqrt(dx*dx + dy*dy)

if(dist < 60){

bot.x += dx * 0.1
bot.y += dy * 0.1

}

})

}
