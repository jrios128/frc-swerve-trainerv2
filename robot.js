
let robot = {
x:450,
y:250,
angle:0,
vx:0,
vy:0,
size:50
};

let swerveModules = [
{x:-20,y:-20,angle:0},
{x:20,y:-20,angle:0},
{x:-20,y:20,angle:0},
{x:20,y:20,angle:0}
];

function drawRobot(ctx){

ctx.save();
ctx.translate(robot.x,robot.y);
ctx.rotate(robot.angle);

ctx.fillStyle="orange";
ctx.fillRect(-robot.size/2,-robot.size/2,robot.size,robot.size);

drawSwerveModules(ctx);

ctx.restore();

}

function drawSwerveModules(ctx){

ctx.strokeStyle="cyan";

swerveModules.forEach(m=>{

ctx.save();
ctx.translate(m.x,m.y);
ctx.rotate(m.angle);

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(15,0);
ctx.stroke();

ctx.restore();

});

}
