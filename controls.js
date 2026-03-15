let joyX = 0;
let joyY = 0;

document.addEventListener("touchmove",function(e)
{                          
let touch = e.touches[0];

joyX = (touch.clientX - window.innerWidth/2)/200;
joyY = (touch.clientY - window.innerHeight/2)/200;

});
