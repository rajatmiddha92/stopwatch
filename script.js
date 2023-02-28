let start=document.querySelector('.start')
let time=document.querySelector('.time')
let cast=document.querySelector('.cast')
let list=document.querySelector('.list')
let pause=document.querySelector('.pause')
let reset=document.querySelector('.reset')
let display=document.querySelector('.display')
var timer
start.addEventListener('click',()=>{
 clock()
})
const clock=()=>{
    let HH='00',MM='00',SS='00',MS='000'
timer=setInterval(()=>{
       time.innerHTML= `${HH} : ${MM} : ${SS} : ${MS}`
       MS=parseInt(MS)
       MS++
       if(MS==1000){
        MS=0
        SS=parseInt(SS)
        SS++
        if(SS<10){
            SS="0"+SS
        }
        if(SS==60){
            SS=0
            MM=parseInt(MM)
            MM++
            if(MM<10){
                MM='0'+MM
            }
            if(MM==60){
                MM=0
                HH=parseInt(HH)
                HH++
                if(H<10){
                    HH='0'+HH
                }
            }
        }

       }
    },0.00000001)
}
let c=1
cast.addEventListener('click',()=>{
    let node=document.createElement('li')
    let text=document.createTextNode(`Cast ${c} : ${time.innerHTML}`)
    node.appendChild(text)
    list.appendChild(node).setAttribute('class','display')
    c++
})
pause.addEventListener('click',()=>{
    clearInterval(timer)
})
reset.addEventListener('click',()=>{
    clearInterval(timer)
    time.innerHTML=`0 0 : 0 0 : 0 0 : 0 0 0`
    while(list.firstElementChild){
    list.removeChild(list.firstElementChild)}
})