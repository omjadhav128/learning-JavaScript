// 1. Generate a random integer value from 1 to 100
const actualNumber = Math.floor(((Math.random()*100)+1))
console.log(actualNumber);

const numberForm = document.querySelector('#inputNumber');
const result = document.querySelector('#res');
let totalguess = 10;
let guessNum = document.querySelector('#guessNum');

// Added event listner on form when user submit the form check for the number
numberForm.addEventListener("submit",startGame);

// 2. Get the input value from the user
function startGame(event){
    event.preventDefault();
    const userNumber = document.querySelector('#number').value;
    document.getElementById('number').value = ''
    guessNum.innerText = `Guesses Remaining : ${totalguess}`; 
    guessRemaining(userNumber);
}

// 3. Check if guesses are remaning or not 
function guessRemaining(num){
    if(totalguess>0){
        validateNumber(num)
        
        guessNum.innerText = `Guesses Remaining : ${totalguess}`; 
    }
    if(totalguess==0){
        guessNum.innerText = `Guesses Remaining : ${totalguess}`; 
        newgame()
    }
}

// 4. Validate if enter value is an integer or not
// if invalid inform the user and wait for valid input value
function validateNumber(num) {    
    if(num == "" || isNaN(num) || num <=0 || num>100){
        result.innerText = `Enter Valid Number. Current value : ${num}`;
    }
    else{
        totalguess--;
        matchNumber(num);        
    }
}

// 5. if input is valid check if the number is same as expected or high or low
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


// give option to start new game is user won or all guesses are finished
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
        submit.disabled = false;
        window.location.reload();
        // guessRemaning = 10;
    })

}



