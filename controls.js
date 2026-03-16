let keys={}

document.addEventListener("keydown",e=>keys[e.key.toLowerCase()]=true)
document.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false)

function readKeyboard(){

let speed=0.5
let rot=0.05

if(keys["w"]) robot.vy-=speed
if(keys["s"]) robot.vy+=speed
if(keys["a"]) robot.vx-=speed
if(keys["d"]) robot.vx+=speed

if(keys["q"]) robot.angle-=rot
if(keys["e"]) robot.angle+=rot

}

function readGamepad(){

let gp = navigator.getGamepads()[0]

if(!gp) return

robot.vx += gp.axes[0]*0.6
robot.vy += gp.axes[1]*0.6
robot.angle += gp.axes[2]*0.05

}
