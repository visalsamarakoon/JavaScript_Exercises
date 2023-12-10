const numParticipants = parseInt(prompt("Enter the number of participants:"));

const participantNames = [];
for (let i = 0; i < numParticipants; i++) {
    const participantName = prompt(`Enter the name of participant ${i + 1}:`);
    participantNames.push(participantName);
}

participantNames.sort();

document.write('<ol>');
participantNames.forEach(name => {
    document.write(`<li>${name}</li>`);
});
document.write('</ol>');