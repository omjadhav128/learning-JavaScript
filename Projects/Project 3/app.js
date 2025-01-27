const clock = document.querySelector(".clock")

// using setInterval() method to run particular function after a specific interval
setInterval(() => {
    clock.style.display = "block"
    const date = new Date();
    clock.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`;
},1000)