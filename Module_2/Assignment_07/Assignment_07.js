function rollDice(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

let rollResults = [];

// Prompt user for the maximum number on the dice
let maxNumber = parseInt(prompt("Enter the maximum number on the dice:"));

while (true) {
    let result = rollDice(maxNumber);
    rollResults.push(result);
    console.log('Roll number: ' + result);

    if (result === maxNumber) {
        break;
    }
}

document.write('<ul>');

for (let j = 0; j < rollResults.length; j++) {
    document.write('<li>');
    document.write('Roll ' + (j + 1) + ': ' + rollResults[j]);
    document.write('</li>');
}

document.write('</ul>');