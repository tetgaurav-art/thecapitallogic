// 1. Set Today's Date in the Top Bar
const dateElement = document.getElementById("current-date");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

dateElement.innerText = today.toLocaleDateString("en-US", options).toUpperCase();

// 2. Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// 3. Simple Console Greeting
console.log("The Capital Logic system loaded.");
