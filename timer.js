let time=120
let interval

function startTimer(){

clearInterval(interval)

interval=setInterval(()=>{

time--

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("timer").innerText=
`${min}:${sec.toString().padStart(2,'0')}`

if(time<=0){

clearInterval(interval)

alert("Match Over! Score: "+score)

}

},1000)

}

function resetTimer(){

clearInterval(interval)

time=120

document.getElementById("timer").innerText="2:00"

score=0

document.getElementById("score").innerText="0"

}
