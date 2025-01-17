const actualNumber = Math.floor(((Math.random()*100)+1))
console.log(actualNumber);


const numberForm = document.querySelector('#inputNumber');
const result = document.querySelector('#res');
let totalguess = 10;
let guessNum = document.querySelector('#guessNum');

numberForm.addEventListener("submit",startGame);

function startGame(event){
    event.preventDefault();
    const userNumber = document.querySelector('#number').value;
    guessNum.innerText = `Guess Remainig : ${totalguess}`; 
    validateNumber(userNumber);
    
}

function validateNumber(num) {
           
    if(num == "" || isNaN(num) || num <=0 || num>100){
        result.innerText = `Enter Valid Number. Current value : ${num}`;
    }
    else{
        guessRemaning(num);        
    }
}

function guessRemaning(num){
    totalguess--;
    if(totalguess>0){
        matchNumber(num)
        guessNum.innerText = `Guess Remainig : ${totalguess}`; 
    }
    else{
        guessNum.innerText = `Guess Remainig : ${totalguess}`; 
        newgame()
    }
}

function matchNumber(num){
    if (num == actualNumber) {
        result.innerText = `You Won. Correct Number ${num}`
        newgame()
    }
    else if(num>actualNumber){
        result.innerText = `${num} Wrong Guess. Your Guess to High.`
    }
    else if(num<actualNumber){
        result.innerText = `${num} Wrong Guess. Your Guess to Low.`
    }
}

function newgame() {
    let newgame = document.querySelector('.newGame');
    let newBTN = document.createElement('button')
    newBTN.innerText = "NEW GAME";
    newBTN.style.padding = "5px 15px";
    newBTN.style.border = "none";
    newBTN.style.borderRadius = "10px";
    newBTN.style.fontSize = "medium";
    newBTN.style.marginTop = "10px";
    let submit = document.querySelector('#submit')
    submit.disabled = true;

    newgame.appendChild(newBTN);

    newBTN.addEventListener('click',() => {
        console.log("dfv");
        
        submit.disabled = false;
        window.location.reload();
        // guessRemaning = 10;
    })

}



