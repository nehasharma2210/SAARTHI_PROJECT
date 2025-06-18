// Predefined Chatbot Responses
const chatbotResponses = {
    'study tips': 'Try the Pomodoro technique: study for 25 minutes, then take a 5-minute break. Also, make concise notes and teach concepts to others to reinforce learning!',
    'deadline': 'Break tasks into smaller chunks and set reminders. Prioritize tasks by urgency and importance to stay on track!',
    'attendance': 'Keep a regular check on your attendance. Aim for at least 75% to avoid issues. Use a tracker to stay updated!',
    'expenses': 'Set a monthly budget and track daily expenses. Avoid unnecessary spending and review your budget weekly!',
    'help': 'I can answer questions about study tips, deadlines, attendance, or expenses. Select one of the questions below!'
};

// Elements
const messagesContainer = document.getElementById('chatbotMessages');
const questionButtons = document.querySelectorAll('.question-btn');

//data
let isDarkTheme = localStorage.getItem('theme') === 'light' ? false : true;


// Typing Effect for Bot Response
function typeMessage(text, element, callback) {
    let index = 0;
    element.textContent = '';
    const typing = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typing);
            if (callback) callback();
        }
    }, 30);
}

// Handle Question Selection
function handleQuestion(questionKey, questionText) {
    // Add user question
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message user';
    userMessage.textContent = questionText;
    messagesContainer.appendChild(userMessage);

    // Add bot response with typing effect
    const response = chatbotResponses[questionKey];
    const botMessage = document.createElement('div');
    botMessage.className = 'chatbot-message bot';
    messagesContainer.appendChild(botMessage);

    typeMessage(response, botMessage, () => {
        // Scroll to bottom after typing
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}

// Event Listeners
questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const questionKey = button.dataset.question;
        const questionText = button.textContent;
        handleQuestion(questionKey, questionText);
    });
});