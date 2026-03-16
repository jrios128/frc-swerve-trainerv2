let score = 0;

let targets = [
{x:120,y:250,r:40},
{x:780,y:250,r:40}
];

function drawTargets(ctx){

ctx.fillStyle="yellow";

targets.forEach(t=>{

ctx.beginPath();
ctx.arc(t.x,t.y,t.r,0,Math.PI*2);
ctx.fill();

});

}

function checkTargets(){

targets.forEach(t=>{

let dx = robot.x - t.x;
let dy = robot.y - t.y;

if(Math.sqrt(dx*dx+dy*dy) < t.r){

score += 5;

}

});

}
