// Elements
// const loginBtn = document.getElementById('loginBtn');
const toolCards = document.querySelectorAll('.tool-card, .feature-card');
const greeting = document.createElement('h3');
const helpLink = document.getElementById('helpLink');
const contactLink = document.getElementById('contactLink');
const contactForm = document.getElementById('contactForm');
const helpLink_footer = document.getElementById('helpLink_footer');
const contactLink_footer=document.getElementById('contactLink_footer');
// Data
let flashcards = [
    { q: "What is the tuple", a: "A tuple is a data structure used to store a collection of value" },
    { q: "Shortcut to check spelling?", a: "f7" },
    { q: "Sun rises in?", a: "East" }
];
let flashcardIndex = 0;
let userName = localStorage.getItem('userName') || '';
let isDarkTheme = localStorage.getItem('theme') === 'light' ? false : true;

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


// Header Scroll
window.addEventListener('scroll', () => {
    document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 50);
});

// Animate on Scroll
function animateOnScroll() {
    document.querySelectorAll('.feature-card, .tool-card').forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => card.classList.add('animated'), index * 100);
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Help and Contact Links
helpLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('helpModal');
});
helpLink_footer.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('helpModal');
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('contactModal');
});
contactLink_footer.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('contactModal');
});

document.getElementById('closeHelp').addEventListener('click', () => closeModal('helpModal'));
document.getElementById('closeContact').addEventListener('click', () => closeModal('contactModal'));

// Tool and Feature Cards
toolCards.forEach(card => {
    card.addEventListener('click', () => {
        const tool = card.dataset.tool; 
         if (tool === 'pomodoro') {
            openModal('pomodoroModal');
        } else if (tool === 'flashcards') {
            openModal('flashcardsModal');
            updateFlashcard();}
    });
});

// Pomodoro Timer
let timeLeft = 25 * 60;
let timerOn = false;
const timerDisplay = document.getElementById('pomodoroTimer');

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('startPomodoro').addEventListener('click', () => {
    if (!timerOn) {
        timeLeft = document.getElementById('pomodoroLength').value * 60;
        timerOn = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(timerOn);
                timerOn = false;
                showNotification('Time’s up!');
            }
        }, 1000);
    }
});

document.getElementById('pausePomodoro').addEventListener('click', () => {
    clearInterval(timerOn);
    timerOn = false;
});

document.getElementById('resetPomodoro').addEventListener('click', () => {
    clearInterval(timerOn);
    timerOn = false;
    timeLeft = document.getElementById('pomodoroLength').value * 60;
    updateTimer();
});
document.getElementById('closePomodoro').addEventListener('click', () => closeModal('pomodoroModal'));

// Flashcards
const flashcard = document.getElementById('flashcard');
flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));

function updateFlashcard() {
    document.getElementById('flashcardQuestion').textContent = flashcards[flashcardIndex].q;
    document.getElementById('flashcardAnswer').textContent = flashcards[flashcardIndex].a;
    flashcard.classList.remove('flipped');
}

document.getElementById('prevCard').addEventListener('click', () => {
    flashcardIndex = (flashcardIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
});

document.getElementById('nextCard').addEventListener('click', () => {
    flashcardIndex = (flashcardIndex + 1) % flashcards.length;
    updateFlashcard();
});

document.getElementById('addFlashcardBtn').addEventListener('click', () => {
    const q = prompt('Enter question:');
    const a = prompt('Enter answer:');
    if (q && a) {
        flashcards.push({ q, a });
        showNotification('Flashcard added!');
        updateFlashcard();
    }
});

document.getElementById('closeFlashcards').addEventListener('click', () => closeModal('flashcardsModal'));

// Explore Button
document.getElementById('exploreBtn').addEventListener('click', () => {
    window.scrollTo({ top: document.getElementById('features').offsetTop - 80, behavior: 'smooth' });
});

// Close Modals on Outside Click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
 