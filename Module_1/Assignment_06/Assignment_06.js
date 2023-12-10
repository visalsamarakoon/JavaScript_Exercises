let confirmation = window.confirm('Should I calculate the square root? ');

if (confirmation){
    let userno = parseInt(prompt('Enter a no: '));
    if (userno<0){
        document.write('The square root of a negative number is not definedThe square root of a negative number is not defined');
    } else{
        let squareroot = userno ** (1/2);
        document.write('Square root is: ' + squareroot)
    }
}else {
    document.write('The square root is not calculated')
}