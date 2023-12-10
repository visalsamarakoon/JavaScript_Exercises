function even(numbersArray) {
    let evenArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenArray.push(numbersArray[i]);
        }
    }
    return evenArray;
}

let originalArray = [2, 7, 4, 8, 9, 6];


let evenNumbersArray = even(originalArray);

document.write("Original Array:", originalArray + '<br>');
document.write("New Array with Even Numbers:", evenNumbersArray);