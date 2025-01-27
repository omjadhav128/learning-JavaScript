const form = document.getElementById('inputForm');
const result = document.querySelector('.result')

form.addEventListener("submit",calculateBMI);

function calculateBMI(event){

    
    event.preventDefault();
    // console.log("ggcv");

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if(height == "" || height<=0 || isNaN(height)){
        result.innerHTML = "<span>Enter Valid Height</span>";
    }
    else if(weight == "" || weight<=0 || isNaN(weight)){
        result.innerHTML = "<span>Enter Valid Weight</span>";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>BMI Score : ${bmi}</span>`
    }
}
