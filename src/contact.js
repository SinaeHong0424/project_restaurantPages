// contact.js
function createContact() {
    const content = document.createElement('div');
    content.classList.add('contact-page');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Contact Information
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Restaurant Information';
    
    const address = document.createElement('p');
    address.innerHTML = '<strong>Address:</strong> 123 Dragon Street, Chinatown, CA 90001';
    
    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Phone:</strong> (555) 123-4567';
    
    const email = document.createElement('p');
    email.innerHTML = '<strong>Email:</strong> info@goldendragon.com';
    
    const hours = document.createElement('p');
    hours.innerHTML = '<strong>Hours:</strong><br>Monday - Thursday: 11:00 AM - 9:30 PM<br>Friday - Saturday: 11:00 AM - 10:30 PM<br>Sunday: 12:00 PM - 9:00 PM';
    
    contactInfo.appendChild(infoTitle);
    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactInfo.appendChild(hours);
    contactContainer.appendChild(contactInfo);

    // Contact Form
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Send Us a Message';
    
    const form = document.createElement('form');
    
    // Name field
    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', true);
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);
    
    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', true);
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);
    
    // Message field
    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');
    
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
    
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('required', true);
    
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    form.appendChild(messageGroup);
    
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Send Message';
    
    form.appendChild(submitBtn);
    contactForm.appendChild(formTitle);
    contactForm.appendChild(form);
    contactContainer.appendChild(contactForm);

    content.appendChild(contactContainer);

    return content;
}

export default createContact;