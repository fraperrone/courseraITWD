// Use Copilot to write a function that toggles the navigation menu’s visibility when the hamburger icon is clicked.Example: toggleMenu().

// Implement smooth scrolling behavior using Copilot for links in the navigation that reference sections within the page.

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); // <-- Add this closing parenthesis for forEach
// Add event listener for the hamburger icon
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
        });
    } else {
        console.warn("No se encontró el botón hamburguesa o el menú.");
    }
});



// Use Copilot to create a filter feature for the “Projects” section.Example: filterProjects(category).

// Function to filter projects based on category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
// Function to open a modal with the clicked image
function openModal(imageSrc) {
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal img');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}


// Step 5: Add form validation
// Next, you can create an interactive “Contact” form that gives users feedback on their submission.

// Use Copilot to add form validation for the “Contact” form.Ensure fields like name, email, and message are filled in before submission.

// Provide real - time feedback using JavaScript to inform users of incorrect or missing input.

// Form validation function
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Evita que se envíe el formulario
        }
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completá todos los campos.');
        return false;
    }

    // Validación básica de email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert('Ingresá un email válido.');
        return false;
    }

    return true;
}