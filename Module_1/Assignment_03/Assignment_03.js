function calculate() {
    let num1 = parseInt(prompt('Enter the first number'));
    let num2 = parseInt(prompt('Enter the second number'));
    let num3 = parseInt(prompt('Enter the third number'));

    let sum = num1 + num2 + num3;
    let product = num1 * num2 * num3;
    let average = sum / 3;

    let results = document.getElementById('results');
    results.textContent = `Sum: ${sum}<br> 
    Product: ${product}<br> 
    Average: ${average}`;

}

calculate();