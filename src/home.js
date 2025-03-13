// home.js

import goldenDragon from'./goldenDragon.jpg';

function createHome() {
    const content = document.createElement('div');
    content.classList.add('home-page');

    // Hero Section
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${goldenDragon})
  `;
     hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Golden Dragon Restaurant';

    const heroText = document.createElement('p');
    heroText.textContent = 'Experience the authentic taste of traditional Chinese cuisine with our handcrafted dishes made from family recipes passed down through generations.';

    hero.appendChild(heroTitle);
    hero.appendChild(heroText);
    content.appendChild(hero);

    // Features section
    const features = document.createElement('div');
    features.classList.add('features');

    // Feature 1
    const feature1 = document.createElement('div');
    feature1.classList.add('feature');
    
    const feature1Title = document.createElement('h2');
    feature1Title.textContent = 'Authentic Taste';
    
    const feature1Text = document.createElement('p');
    feature1Text.textContent = 'Our chefs bring over 30 years of experience in traditional Chinese cooking techniques.';
    
    feature1.appendChild(feature1Title);
    feature1.appendChild(feature1Text);
    features.appendChild(feature1);

    // Feature 2
    const feature2 = document.createElement('div');
    feature2.classList.add('feature');
    
    const feature2Title = document.createElement('h2');
    feature2Title.textContent = 'Fresh Ingredients';
    
    const feature2Text = document.createElement('p');
    feature2Text.textContent = 'We source our ingredients daily from local markets to ensure the freshest flavors in every dish.';
    
    feature2.appendChild(feature2Title);
    feature2.appendChild(feature2Text);
    features.appendChild(feature2);

    // Feature 3
    const feature3 = document.createElement('div');
    feature3.classList.add('feature');
    
    const feature3Title = document.createElement('h2');
    feature3Title.textContent = 'Award Winning';
    
    const feature3Text = document.createElement('p');
    feature3Text.textContent = 'Proudly recognized as the best Chinese restaurant in the city for three consecutive years.';
    
    feature3.appendChild(feature3Title);
    feature3.appendChild(feature3Text);
    features.appendChild(feature3);

    content.appendChild(features);

    return content;
}

export default createHome;