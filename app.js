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

ctx.save();

ctx.translate(robot.x,robot.y);
ctx.rotate(robot.angle);

ctx.fillStyle="orange";
ctx.fillRect(-robot.size/2,-robot.size/2,robot.size,robot.size);

ctx.fillStyle="black";
ctx.fillRect(10,-5,15,10);

ctx.restore();

}

function readGamepad(inputX,inputY){

let gamepads = navigator.getGamepads();

if(!gamepads) return;

let gp = gamepads[0];

if(!gp) return;

let deadzone = 0.1;

let lx = gp.axes[0];
let ly = gp.axes[1];
let rx = gp.axes[2];

if(Math.abs(lx)>deadzone) inputX = lx;
if(Math.abs(ly)>deadzone) inputY = ly;

if(Math.abs(rx)>deadzone){
robot.angle += rx*0.05;
}

}


function loop(){

update();
draw();

requestAnimationFrame(loop);

}

loop();
