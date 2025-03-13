// about.js
import aboutUsImage from './aboutUs.png';

function createAbout() {
    const content = document.createElement('div');
    content.classList.add('about-page');

    content.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url(${aboutUsImage}) no-repeat center center
    `;
    content.style.backgroundSize = 'cover';
    content.style.color = '#fff';
    content.style.padding = '2rem';
    content.style.minHeight = '100vh'; 

    const title = document.createElement('h1');
    title.textContent = 'About Us';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    aboutContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    aboutContainer.style.borderRadius = '8px';
    aboutContainer.style.padding = '2rem';
    aboutContainer.style.maxWidth = '800px';
    aboutContainer.style.margin = '0 auto';

    const storySection = document.createElement('div');
    storySection.classList.add('about-section');
    storySection.style.marginBottom = '2rem'; 

    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    storyTitle.style.marginBottom = '1rem';

    const storyPara1 = document.createElement('p');
    storyPara1.textContent =
      'Golden Dragon Restaurant was founded in 1985 by Chef Li Wei, who brought his culinary expertise from Shanghai to share the authentic flavors of Chinese cuisine with our city.';

    const storyPara2 = document.createElement('p');
    storyPara2.textContent =
      'What started as a small family restaurant has grown into a beloved establishment, thanks to our commitment to quality and the support of our loyal customers.';

    storySection.appendChild(storyTitle);
    storySection.appendChild(storyPara1);
    storySection.appendChild(storyPara2);
    aboutContainer.appendChild(storySection);

    const philosophySection = document.createElement('div');
    philosophySection.classList.add('about-section');
    philosophySection.style.marginBottom = '2rem';

    const philosophyTitle = document.createElement('h2');
    philosophyTitle.textContent = 'Our Philosophy';
    philosophyTitle.style.marginBottom = '1rem';

    const philosophyPara = document.createElement('p');
    philosophyPara.textContent =
      "At Golden Dragon, we believe that great food brings people together. Our philosophy is simple: use the freshest ingredients, follow traditional cooking methods, and serve with love and care. We're committed to providing not just a meal, but an experience that honors the rich culinary heritage of China.";

    philosophySection.appendChild(philosophyTitle);
    philosophySection.appendChild(philosophyPara);
    aboutContainer.appendChild(philosophySection);

    const teamSection = document.createElement('div');
    teamSection.classList.add('about-section');

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Our Team';
    teamTitle.style.marginBottom = '1rem';

    const teamPara = document.createElement('p');
    teamPara.textContent =
      "Our kitchen is led by Executive Chef Zhang Min, who brings over 25 years of experience in traditional Chinese cooking. Our team of chefs and staff are like family, working together to create memorable dining experiences for our guests.";

    teamSection.appendChild(teamTitle);
    teamSection.appendChild(teamPara);
    aboutContainer.appendChild(teamSection);

    content.appendChild(aboutContainer);

    return content;
}

export default createAbout;
