let grocery-1;
let grocery-2;
let grocery-3;

function calculateTotal() {  
    grocery-1 = parseFloat(document.getElementById('grocery-1').value);
    grocery-2 = parseFloat(document.getElementById('grocery-2').value);
    grocery-3 = parseFloat(document.getElementById('grocery-3').value);
    let total = grocery-1 + grocery-2 + grocery-3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}