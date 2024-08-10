function addNumber(num) {
    const currentScoreInput = document.getElementById("currentScore");
    currentScoreInput.value += num;
}

function enterScore() {
    const currentScoreInput = document.getElementById("currentScore");
    const minScoreInput = document.getElementById("minScore");
    const maxScoreInput = document.getElementById("maxScore");

    const currentScore = parseInt(currentScoreInput.value);

    if (!isNaN(currentScore)) {
        const minScore = parseInt(minScoreInput.value);
        const maxScore = parseInt(maxScoreInput.value);

        if (currentScore < minScore) {
            minScoreInput.value = currentScore;
        }

        if (currentScore > maxScore) {
            maxScoreInput.value = currentScore;
        }

        currentScoreInput.value = "";
    } else {
        alert("Please enter a valid score.");
    }
}
