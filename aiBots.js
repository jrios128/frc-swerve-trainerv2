let defenders = [
{x:300,y:150,angle:0},
{x:600,y:350,angle:0}
];

function updateDefenders(){

defenders.forEach(bot=>{

let dx = robot.x - bot.x;
let dy = robot.y - bot.y;

bot.x += dx * 0.01;
bot.y += dy * 0.01;

});

}

function drawDefenders(ctx){

ctx.fillStyle="red";

defenders.forEach(bot=>{

ctx.save();

ctx.translate(bot.x,bot.y);
ctx.fillRect(-20,-20,40,40);

ctx.restore();

});

}
