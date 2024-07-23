
const Questions = [
    "What is your name?",
    "Where are you from?",
    "Which department are you pursuing?",
    "Which college are you studying?",
    "How old are you?",
    "How many languages do you know?",
    "Where did you go for internships?"
];

function isQuestionAccepted(question) {
    return Questions.includes(question);
}

function checking() {
    const questionInput = document.getElementById("questionInput").value.trim();
    const responseElement = document.getElementById("response");

    if (questionInput === "") {
        responseElement.textContent = "Please enter a question.";
        responseElement.style.color = "red";
        return;
    }
    if (isQuestionAccepted(questionInput)) {
        responseElement.textContent = "Accepted: You asked a valid question.";
        responseElement.style.color = "green";
    } else {
        responseElement.textContent = "Declined: You asked a Invalid question.";
        responseElement.style.color = "red";
    }
}
