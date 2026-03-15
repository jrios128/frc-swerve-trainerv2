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
