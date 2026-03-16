function handleCollisions(){

defenders.forEach(bot=>{

let dx = robot.x - bot.x;
let dy = robot.y - bot.y;

let dist = Math.sqrt(dx*dx+dy*dy);

if(dist < 45){

let angle = Math.atan2(dy,dx);

robot.vx += Math.cos(angle)*2;
robot.vy += Math.sin(angle)*2;

}

});

}
