// 1. Get specialty from URL
const params = new URLSearchParams(window.location.search);
const specialty = params.get("set");

// 2. Get user's selections from localStorage
const selectedTopics = JSON.parse(localStorage.getItem("selectedTopics")) || [];
const questionCount = localStorage.getItem("questionCount") || "all";

// 3. Filter questions based on selected topics
let allSelectedQuestions = [];

selectedTopics.forEach(topic => {
    allSelectedQuestions = allSelectedQuestions.concat(questionSets[specialty][topic]);
});

// 4. Limit question count if needed
if (questionCount !== "all") {
    allSelectedQuestions = allSelectedQuestions.slice(0, parseInt(questionCount));
}

// 5. Use the filtered questions
const questions = allSelectedQuestions;

// 3. Track which question we're on
let currentQuestionIndex = 0;

// 4. Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    const questionText = document.getElementById("questionText");
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Display the options
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";  // Clear old options

    Object.entries(currentQuestion.options).forEach(([letter, text]) => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.textContent = `${letter}: ${text}`;
        button.onclick = () => checkAnswer(letter, currentQuestion.correctAnswer, button);
        optionsContainer.appendChild(button);
    });
}

// 5. Check if answer is correct
function checkAnswer(selected, correct, clickedButton) {
    // Disable all buttons immediately
    const allButtons = document.querySelectorAll(".option-button");
    allButtons.forEach(btn => btn.disabled = true);
    
    if (selected === correct) {
        // User got it right - turn button green
        clickedButton.classList.add("correct-answer");
    } else {
        // User got it wrong - turn clicked button red
        clickedButton.classList.add("wrong-answer");
        
        // Find and highlight the correct answer in red
        allButtons.forEach(btn => {
            if (btn.textContent.startsWith(correct)) {
                btn.classList.add("correct-answer");
            }
        });
    }
}
// 6. Go to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        goToIndex();
    }
}

// 7. Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function goToIndex() {
    window.location.href = "index.html";
}

// 8. Display the first question when page loads
displayQuestion();