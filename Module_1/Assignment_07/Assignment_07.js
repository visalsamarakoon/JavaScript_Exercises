let dice = parseInt(prompt('No of dice: '));
let sum = 0;
for (let i = 0; i < dice; i++){
    let diceno = Math.floor(Math.random()*6) +1;
    sum = sum + diceno;
}
document.write('Total is: ' + sum);