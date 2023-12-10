function concat(stringsArray) {
    let result = "";
    for (let i = 0; i < stringsArray.length; i++) {
        result += stringsArray[i];
    }
    return result;
}

let namesArray = ["Mark", "Gomes", "Joe", "Nick"];
let concatenatedString = concat(namesArray);
document.write(concatenatedString);