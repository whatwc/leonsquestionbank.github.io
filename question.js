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

// Track results for each question (add this)
let questionResults = Array(questions.length).fill(null);  // null = unanswered, true = correct, false = wrong

// 4. Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    const questionText = document.getElementById("questionText");
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    // clear the explanation
    const explanationDiv = document.getElementById("explanation");
    explanationDiv.textContent = "";
    explanationDiv.style.display = "none"; 

    // UPDATE THE PROGRESS TRACKER
    displayProgressTracker();

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
    const currentQuestion = questions[currentQuestionIndex];
    const allButtons = document.querySelectorAll(".option-button");
    allButtons.forEach(btn => btn.disabled = true);

        // Determine if correct
    const isCorrect = selected === correct;  // ADD THIS
    
    // SAVE THE RESULT TO THE ARRAY
    questionResults[currentQuestionIndex] = isCorrect;  // ADD THIS
    
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

        // Display the explanation
    const explanationDiv = document.getElementById("explanation");
    explanationDiv.textContent = currentQuestion.explanation;
    explanationDiv.style.display = "block";

        // UPDATE THE PROGRESS TRACKER
    displayProgressTracker();
    updateScorePercentage ();
}

function displayProgressTracker() {
    const trackerContainer = document.getElementById("progressTracker");
    trackerContainer.innerHTML = "";  // Clear old tracker

    questions.forEach((question, index) => {
        const box = document.createElement("div");
        box.className = "progress-box";
        box.textContent = `Question ${index + 1}`;
        
        // Add color based on result
        if (questionResults[index] === true) {
            box.classList.add("progress-correct");
        } else if (questionResults[index] === false) {
            box.classList.add("progress-wrong");
        } else {
            box.classList.add("progress-unanswered");
        }
        
        // Click to jump to that question
        box.onclick = () => jumpToQuestion(index);
        
        trackerContainer.appendChild(box);
    });
}

function updateScorePercentage() {
    // Count correct answers
    const correctCount = questionResults.filter(result => result === true).length;
    
    // Count answered questions
    const answeredCount = questionResults.filter(result => result !== null).length;
    
    // Calculate percentage
    let percentage = 0;
    if (answeredCount > 0) {
        percentage = Math.round((correctCount / answeredCount) * 100);
    }
    
    // Display percentage
    const scoreDisplay = document.getElementById("scorePercentage");
    scoreDisplay.textContent = `${percentage}%`;
    scoreDisplay.className = "score-display";
    
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

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    displayQuestion();
}



// ADD THIS SECTION:
// Keyboard navigation
document.addEventListener('keydown', (event) => {
    // Map keyboard numbers to answer letters
    const keyMap = {
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E'
    };
    
    // If user pressed 1-5, select that answer
    if (keyMap[event.key]) {
        const answerLetter = keyMap[event.key];
        const allButtons = document.querySelectorAll(".option-button");
        
        // Find the button with this letter and click it
        allButtons.forEach(btn => {
            if (btn.textContent.startsWith(answerLetter)) {
                btn.click();
            }
        });
    }
    
    // If user pressed Enter, go to next question (only if buttons are disabled/answered)
    if (event.key === 'Enter') {
        const allButtons = document.querySelectorAll(".option-button");
        const allDisabled = Array.from(allButtons).every(btn => btn.disabled);
        
        // Only move to next question if current question is answered
        if (allDisabled) {
            nextQuestion();
        }
    }
});


// 8. Display the first question when page loads
displayQuestion();