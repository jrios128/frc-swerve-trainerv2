let keys={}

document.addEventListener("keydown",e=>keys[e.key.toLowerCase()]=true)
document.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false)

let joyLeft={x:0,y:0}
let joyRight={x:0,y:0}

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

function readMobileControls(){

robot.vx += joyLeft.x*0.6
robot.vy += joyLeft.y*0.6

robot.angle += joyRight.x*0.05

}

function setupJoystick(id,joy){

const joystick=document.getElementById(id)
const stick=joystick.querySelector(".stick")

let active=false

joystick.addEventListener("touchstart",()=>active=true)

joystick.addEventListener("touchend",()=>{

active=false

joy.x=0
joy.y=0

stick.style.left="40px"
stick.style.top="40px"

})

joystick.addEventListener("touchmove",e=>{

if(!active) return

let rect=joystick.getBoundingClientRect()

let x=e.touches[0].clientX-rect.left-70
let y=e.touches[0].clientY-rect.top-70

let max=50

let dist=Math.sqrt(x*x+y*y)

if(dist>max){

x*=max/dist
y*=max/dist

}

joy.x=x/max
joy.y=y/max

stick.style.left=(x+40)+"px"
stick.style.top=(y+40)+"px"

})

}

setupJoystick("leftJoystick",joyLeft)
setupJoystick("rightJoystick",joyRight)
