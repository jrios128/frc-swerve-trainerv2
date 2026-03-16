function handleCollisions(){

const margin = 20
const half = robot.size/2

/* ROBOT VS DEFENSE BOTS */

defenders.forEach(bot=>{

let dx = robot.x - bot.x
let dy = robot.y - bot.y

let dist = Math.sqrt(dx*dx + dy*dy)

if(dist < 45){

let angle = Math.atan2(dy,dx)

robot.vx += Math.cos(angle)*2
robot.vy += Math.sin(angle)*2

}

})

/* ROBOT FIELD BOUNDARY */

if(robot.x - half < margin){
robot.x = margin + half
robot.vx *= -0.3
}

if(robot.x + half > canvas.width - margin){
robot.x = canvas.width - margin - half
robot.vx *= -0.3
}

if(robot.y - half < margin){
robot.y = margin + half
robot.vy *= -0.3
}

if(robot.y + half > canvas.height - margin){
robot.y = canvas.height - margin - half
robot.vy *= -0.3
}

/* DEFENDER FIELD BOUNDARY */

defenders.forEach(bot=>{

const botSize = 20

if(bot.x - botSize < margin) bot.x = margin + botSize
if(bot.x + botSize > canvas.width - margin) bot.x = canvas.width - margin - botSize

if(bot.y - botSize < margin) bot.y = margin + botSize
if(bot.y + botSize > canvas.height - margin) bot.y = canvas.height - margin - botSize

})

}
