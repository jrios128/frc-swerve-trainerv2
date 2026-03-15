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

function drawObstacles(){

ctx.fillStyle="gray";

ctx.fillRect(200,200,60,60);
ctx.fillRect(600,120,60,60);
ctx.fillRect(500,350,80,80);

}

function drawField(ctx, canvas){

ctx.fillStyle="#0b5e20";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle="white";
ctx.lineWidth=4;

ctx.strokeRect(20,20,canvas.width-40,canvas.height-40);

// center line
ctx.beginPath();
ctx.moveTo(canvas.width/2,20);
ctx.lineTo(canvas.width/2,canvas.height-20);
ctx.stroke();

// scoring hubs
drawTarget(ctx,150,250);
drawTarget(ctx,750,250);

}

function loop(){
update();
draw();
requestAnimationFrame(loop);
}

loop();
