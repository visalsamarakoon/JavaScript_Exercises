let start = parseInt(prompt('Start year: '));
let end = parseInt(prompt('End year: '));
document.write('<ul>');
for(start; start <= end; start++) {
    if (start % 4 === 0) {
        if (start % 100 === 0) {
            if (start % 400 === 0) {
                document.write('<li>' + start + '</li>');
            }
        } else{
            document.write('<li>' + start + '</li>')
        }
    }
}
document.write('</ul>');