function checkTargets(){

targets.forEach(t=>{

let dx = robot.x - t.x;
let dy = robot.y - t.y;

let dist = Math.sqrt(dx*dx+dy*dy);

if(dist < t.r){

score += 5;

}

});

}

ctx.fillStyle="white";
ctx.font="24px Arial";
ctx.fillText("Score: "+score,20,30);

score += Math.floor(timeAlive/10);
