let randomval = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E',"F"];
let body = document.querySelector('body');
let inter;
let working=false; // using this flag as interval is triggerd even after its currently working and will change color rapidly

document.querySelector("#start").addEventListener('click',(event)=>{
    if(!working){
        working=true
        inter = setInterval(()=>{
            let randomColor = '#';
            for(let i=0;i<6;i++){
                randomColor += randomval[Math.floor(Math.random()*16)]
            }
            body.style.backgroundColor = randomColor;  
        },1000);
    }
})

document.querySelector('#stop').addEventListener('click',(event)=>{
    clearInterval(inter);
    working=false
})