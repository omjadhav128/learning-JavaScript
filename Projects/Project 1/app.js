let box = document.getElementsByClassName('box')
const body = document.querySelector('body')

for (let index = 0; index < box.length; index++) {
    const element = box[index];
    box[index].addEventListener("click",changeColor);
}

function changeColor(e) {
    // console.log(e);
    // console.log(e.target);
    
    if(e.target.id == "Red"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "Green"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "Yellow"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "Orange"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "Blue"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "White"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
    }
    if(e.target.id == "Purple"){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "Grey"){
        body.style.backgroundColor = e.target.id;
    }
}