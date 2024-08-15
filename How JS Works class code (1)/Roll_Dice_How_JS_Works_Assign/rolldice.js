document.getElementById('roll').addEventListener('click', function() {
    // Roll the dice
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;

    // Display the results
    document.getElementById('member-1').textContent = dice1;
    document.getElementById('member-2').textContent = dice2;
    document.getElementById('member-3').textContent = dice3;

    // Determine the winner
    let maxScore = Math.max(dice1, dice2, dice3);
    let scores = [dice1, dice2, dice3];

    // Clear previous colors
    document.getElementById('member-1').style.backgroundColor = 'white';
    document.getElementById('member-2').style.backgroundColor = 'white';
    document.getElementById('member-3').style.backgroundColor = 'white';

    let winnerText = '';

    if ((dice1 === dice2) && (dice2 === dice3)) {
        winnerText = 'It\'s a draw!';
        document.getElementById('member-1').style.backgroundColor = 'blue';
        document.getElementById('member-2').style.backgroundColor = 'blue';
        document.getElementById('member-3').style.backgroundColor = 'blue';
    } else {
        let winnerIndices = [];
        scores.forEach((score, index) => {
            if (score === maxScore) {
                winnerIndices.push(index);
            }
        });

        if (winnerIndices.length === 1) {
            winnerText = `Winner is Member ${String.fromCharCode(65 + winnerIndices[0])}!`;
        } else {
            winnerText = 'It\'s a draw between: ';
            winnerIndices.forEach(index => {
                winnerText += `Member ${String.fromCharCode(65 + index)} `;
            });
        }

        // Assign colors based on score
        scores.forEach((score, index) => {
            if (score === maxScore) {
                document.getElementById(`member-${index + 1}`).style.backgroundColor = 'green';
            } else if (score === Math.min(...scores)) {
                document.getElementById(`member-${index + 1}`).style.backgroundColor = 'red';
            } else {
                document.getElementById(`member-${index + 1}`).style.backgroundColor = 'yellow';
            }
        });
    }

    document.getElementById('winner').textContent = winnerText;
});
