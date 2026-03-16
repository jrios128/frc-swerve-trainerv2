function update(){

readGamepad();

updateDefenders();

handleCollisions();

checkTargets();

robot.x += robot.vx;
robot.y += robot.vy;

robot.vx *= .9;
robot.vy *= .9;

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawField(ctx,canvas);

drawTargets(ctx);

drawDefenders(ctx);

drawRobot(ctx);

}
function getRank(){

if(score>150) return "Elite Driver";
if(score>80) return "Varsity Driver";
if(score>30) return "Driver";
return "Rookie";

}
function loop(){

update();
draw();

requestAnimationFrame(loop);

}

loop();
