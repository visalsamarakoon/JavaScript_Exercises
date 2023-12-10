let givenNumbers = [];
let hasDuplicate = false;

while (!hasDuplicate) {
    let input = prompt("Enter a number:");

    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        continue;
    }

    if (givenNumbers.includes(number)) {
        alert("You've already entered this number.");
        hasDuplicate = true;
    } else {
        givenNumbers.push(number);
    }
}

givenNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Given Numbers in Ascending Order:", givenNumbers);