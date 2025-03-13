// index.js
import './styles.css';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';
import createContact from './contact';

function initializeWebsite() {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    // Set active button
    function setActiveButton(button) {
        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to selected button
        button.classList.add('active');
    }
    
    // Clear content
    function clearContent() {
        content.innerHTML = '';
    }
    
    // Load home page
    function loadHome() {
        clearContent();
        setActiveButton(homeBtn);
        content.appendChild(createHome());
    }
    
    // Load menu page
    function loadMenu() {
        clearContent();
        setActiveButton(menuBtn);
        content.appendChild(createMenu());
    }
    
    // Load about page
    function loadAbout() {
        clearContent();
        setActiveButton(aboutBtn);
        content.appendChild(createAbout());
    }
    
    // Load contact page
    function loadContact() {
        clearContent();
        setActiveButton(contactBtn);
        content.appendChild(createContact());
    }
    
    // Event listeners for buttons
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadAbout);
    contactBtn.addEventListener('click', loadContact);
    
    // Load home page by default
    loadHome();
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);