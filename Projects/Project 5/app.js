let display = document.querySelector('.keyDetails');
window.addEventListener('keydown',(event)=>{
    console.log("Key pressed");
    display.innerHTML = `
        <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${(event.key == " " ?"space":event.key)}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    `    
})