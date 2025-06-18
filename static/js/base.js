// Theme Toggle
const notificationText = document.getElementById('notificationText');
const notification = document.getElementById('notification');
const themeToggle = document.getElementById('themeToggle');
const fontSizeToggle = document.getElementById('fontSizeToggle');

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('light', !isDarkTheme);
    document.body.classList.toggle('dark', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.getElementById('themeIcon').className = isDarkTheme ? 'fas fa-moon' : 'fas fa-sun';
    showNotification(`Theme switched to ${isDarkTheme ? 'Dark' : 'Light'}!`);
}
// Font Size Toggle
const fontSizes = ['small', 'medium', 'large'];
let currentFontIndex = fontSizes.indexOf(localStorage.getItem('fontSize') || 'medium');

function setFontSize(size) {
    document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
    document.body.classList.add(`font-size-${size}`);
    localStorage.setItem('fontSize', size);
    showNotification(`Font size set to ${size}!`);
}
fontSizeToggle.addEventListener('click', () => {
    currentFontIndex = (currentFontIndex + 1) % fontSizes.length;
    setFontSize(fontSizes[currentFontIndex]);
});
// Notification
function showNotification(message, type = 'success') {
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    document.body.classList.add(isDarkTheme ? 'dark' : 'light');
    themeIcon.className = isDarkTheme ? 'fas fa-moon' : 'fas fa-sun';
    themeToggle.addEventListener('click', toggleTheme);

    // Apply saved font size
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    setFontSize(savedFontSize); // Use setFontSize to ensure consistency
    fontSizeToggle.addEventListener('click', () => {
        currentFontIndex = (currentFontIndex + 1) % fontSizes.length;
        setFontSize(fontSizes[currentFontIndex]);
    });

});