// 1. Get which specialty from URL (coming from index.html)
const params = new URLSearchParams(window.location.search);
const specialty = params.get("set");

// 2. Display the specialty title
document.getElementById("specialtyTitle").textContent = 
    specialty.charAt(0).toUpperCase() + specialty.slice(1);

// 3. Create checkboxes for each topic
const topics = Object.keys(questionSets[specialty]);
const checkboxContainer = document.getElementById("topicsCheckboxes");

topics.forEach(topic => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = topic;
    checkbox.checked = true;  // All checked by default
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(topic));
    label.className = "checkbox-label";
    
    checkboxContainer.appendChild(label);
});

// 4. Handle "Start Quiz" button
function startQuiz() {
    // Get selected topics
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedTopics = Array.from(checkboxes).map(cb => cb.value);
    
    // Get selected question count
    const questionCount = document.getElementById("questionCount").value;
    
    // Save to localStorage
    localStorage.setItem("selectedTopics", JSON.stringify(selectedTopics));
    localStorage.setItem("questionCount", questionCount);
    localStorage.setItem("specialty", specialty);
    
    // Navigate to question page
    window.location.href = `question.html?set=${specialty}`;
}

function goBack() {
    window.location.href = "index.html";
}