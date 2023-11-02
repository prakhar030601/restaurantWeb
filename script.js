// Function to scroll smoothly to a section when a navigation link is clicked
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to toggle the navigation menu on mobile devices
function toggleMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
}

// Debounce function to limit the rate of event triggering
function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Function to show and hide the food menu flash cards with a button click
function toggleFoodMenuCards() {
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach((card) => {
        card.classList.toggle('active');
    });
}

// Event listeners for navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        scrollToSection(targetSectionId);
    });
});

// Event listener for mobile menu button with debouncing
const debouncedToggleMobileMenu = debounce(toggleMobileMenu, 300); // Adjust the delay as needed
document.querySelector('.navbar-toggler').addEventListener('click', debouncedToggleMobileMenu);

// Event listener for food menu flash card button
document.querySelector('#toggleMenuCardsButton').addEventListener('click', toggleFoodMenuCards);
