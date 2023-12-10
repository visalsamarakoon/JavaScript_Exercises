let dogs = [];
for (let i=0; i<6;i++){
    let name = prompt('Enter dog name: ');
    dogs.push(name);
}
dogs.sort().reverse();
document.write('<ul>')

for (let j = 0; j<dogs.length; j++){
    document.write('<li>')
    document.write(dogs[j]);
    document.write('</li>')
}

document.write('</ul>');