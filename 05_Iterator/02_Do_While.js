// While => First condition is checked and then code inside is executed
// Do While => First one iteration is performed then condition is checked. If none of the condition match then also loop will be executed once.

let num = 1
while (num <=3) {
    console.log("Hello ",num);
    num++;
}


do {
    console.log("Inside do while loop...");  
} while (num<1);