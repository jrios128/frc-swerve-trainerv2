const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let robot = {
x:400,
y:250,
angle:0,
size:40
};

let keys = {};

document.addEventListener("keydown", e => keys[e.key]=true);
document.addEventListener("keyup", e => keys[e.key]=false);

function update(){

let speed = 3;
let rotSpeed = 0.05;

if(keys["q"]) robot.angle -= rotSpeed;
if(keys["e"]) robot.angle += rotSpeed;

let dx=0;
let dy=0;

if(keys["w"]) dy -= speed;
if(keys["s"]) dy += speed;
if(keys["a"]) dx -= speed;
if(keys["d"]) dx += speed;

let mode = document.getElementById("mode").value;

if(mode==="robot"){
let cos = Math.cos(robot.angle);
let sin = Math.sin(robot.angle);

let rx = dx*cos - dy*sin;
let ry = dx*sin + dy*cos;

robot.x += rx;
robot.y += ry;

}else{
robot.x += dx;
robot.y += dy;
}

}
let time = 120;
let interval;

function startTimer(){

clearInterval(interval);

interval = setInterval(()=>{

time--;
let min = Math.floor(time/60);
let sec = time%60;

document.getElementById("timer").innerText =
`${min}:${sec.toString().padStart(2,'0')}`;

if(time<=0) clearInterval(interval);

},1000);

}

function resetTimer(){
clearInterval(interval);
time = 120;
document.getElementById("timer").innerText="2:00";
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

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawObstacles();

ctx.save();
ctx.translate(robot.x,robot.y);
ctx.rotate(robot.angle);

ctx.fillStyle="orange";
ctx.fillRect(-robot.size/2,-robot.size/2,robot.size,robot.size);

ctx.restore();

}

function drawObstacles(){

ctx.fillStyle="gray";

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

