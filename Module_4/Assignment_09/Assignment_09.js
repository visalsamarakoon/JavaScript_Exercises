let userNumber = parseInt(prompt('Enter a no: '));
let z = 0;
let x = 0;
while(z<=userNumber){
    if(userNumber % z === 0){
        x = x + 1;
    }
    z++;
}

if (x === 2){
    document.write('It is a prime number')
} else {
    document.write('It is not a prime number')
}