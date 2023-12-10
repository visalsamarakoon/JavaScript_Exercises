function sort() {
    const name = prompt("Enter your name");

    let output;

    const generatingRandom = Math.floor(Math.random() * 4) + 1;

    switch (generatingRandom) {
        case 1:
            output = 'Gryffindor';
            break;

        case 2:
            output = 'Slytherin';
            break;

        case 3:
            output = 'Hufflepuff';
            break;

        case 4:
            output = 'Ravenclaw';
            break;

        default:
            output = 'Manual assigning required. Contact Administration';
    }

    const results = document.getElementById('results')
    results.textContent = `${name}, you are ${output}.`
}

sort()