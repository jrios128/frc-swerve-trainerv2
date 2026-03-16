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

function loop(){

update();
draw();

requestAnimationFrame(loop);

}

loop();
