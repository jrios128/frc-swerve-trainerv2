const canvas = document.getElementById("fieldCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

let robot = {
x:450,
y:250,
angle:0,
size:40,
vx:0,
vy:0
};

let keys = {};

document.addEventListener("keydown",e=>keys[e.key.toLowerCase()]=true);
document.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);

function update(){

let speed = 0.4;
let rotSpeed = 0.05;

let inputX = 0;
let inputY = 0;

if(keys["w"]) inputY -=1;
if(keys["s"]) inputY +=1;
if(keys["a"]) inputX -=1;
if(keys["d"]) inputX +=1;

if(keys["q"]) robot.angle -= rotSpeed;
if(keys["e"]) robot.angle += rotSpeed;

readGamepad(inputX,inputY);

let mode = document.getElementById("driveMode").value;

if(mode==="robot"){

let cos = Math.cos(robot.angle);
let sin = Math.sin(robot.angle);

let rx = inputX*cos - inputY*sin;
let ry = inputX*sin + inputY*cos;

robot.vx += rx*speed;
robot.vy += ry*speed;

}else{

robot.vx += inputX*speed;
robot.vy += inputY*speed;

}

robot.x += robot.vx;
robot.y += robot.vy;

robot.vx *= 0.9;
robot.vy *= 0.9;

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawField(ctx,canvas);
drawrobot();  

ctx.save();

ctx.translate(robot.x,robot.y);
ctx.rotate(robot.angle);

ctx.fillStyle="orange";
ctx.fillRect(-robot.size/2,-robot.size/2,robot.size,robot.size);

ctx.fillStyle="black";
ctx.fillRect(10,-5,15,10);

ctx.restore();

}

function drawObstacles()
{
ctx.fillstyle="gray";
  ctx.fillRect(200,200,60,60);
  ctx.fillRect(600,120,60,60);
  ctx.fillRect(500,350,80,80);
}

function loop(){

update();
draw();

requestAnimationFrame(loop);

}

loop();

loop();
