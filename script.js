
function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = "paris";

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerHTML = "<span class='green'>&#10004; Correct Answer!</span>";
    } else {
        document.getElementById("feedback").innerHTML = "<span class='red'>&#10008; Incorrect Answer. Try again!</span>";
    }
}