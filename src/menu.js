// menu.js
function createMenu() {
    const content = document.createElement('div');
    content.classList.add('menu-page');

    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    title.style.textAlign = 'center';
    title.style.marginBottom = '2rem';
    content.appendChild(title);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Appetizers
    const appetizers = document.createElement('div');
    appetizers.classList.add('menu-category');
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'Appetizers';
    appetizers.appendChild(appetizersTitle);

    const appetizerItems = [
        {
            name: 'Steamed Soup Dumplings',
            description: 'Traditional Shanghainese soup dumplings filled with pork',
            price: '$12.99'
        },
        {
            name: 'Spring Rolls',
            description: 'Crispy rolls filled with vegetables and served with sweet sauce',
            price: '$8.99'
        },
        {
            name: 'Scallion Pancake',
            description: 'Traditional Chinese flatbread with scallions',
            price: '$9.99'
        }
    ];

    appetizerItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        appetizers.appendChild(menuItem);
    });

    menuContainer.appendChild(appetizers);

    // Main Dishes
    const mainDishes = document.createElement('div');
    mainDishes.classList.add('menu-category');
    
    const mainDishesTitle = document.createElement('h2');
    mainDishesTitle.textContent = 'Main Dishes';
    mainDishes.appendChild(mainDishesTitle);

    const mainDishItems = [
        {
            name: 'Kung Pao Chicken',
            description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers',
            price: '$18.99'
        },
        {
            name: 'Peking Duck',
            description: 'Roasted duck served with pancakes, spring onions, and hoisin sauce',
            price: '$32.99'
        },
        {
            name: 'Mapo Tofu',
            description: 'Spicy tofu dish with minced pork in a flavorful sauce',
            price: '$16.99'
        }
    ];

    mainDishItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        mainDishes.appendChild(menuItem);
    });

    menuContainer.appendChild(mainDishes);

    // Noodles & Rice
    const noodlesRice = document.createElement('div');
    noodlesRice.classList.add('menu-category');
    
    const noodlesRiceTitle = document.createElement('h2');
    noodlesRiceTitle.textContent = 'Noodles & Rice';
    noodlesRice.appendChild(noodlesRiceTitle);

    const noodlesRiceItems = [
        {
            name: 'Dan Dan Noodles',
            description: 'Spicy Sichuan noodles topped with preserved vegetables and minced pork',
            price: '$14.99'
        },
        {
            name: 'Yangzhou Fried Rice',
            description: 'Classic fried rice with shrimp, pork, and vegetables',
            price: '$13.99'
        },
        {
            name: 'Shanghai Fried Noodles',
            description: 'Stir-fried thick noodles with beef and vegetables in a sweet soy sauce',
            price: '$15.99'
        }
    ];

    noodlesRiceItems.forEach(item => {
        const menuItem = createMenuItem(item.name, item.description, item.price);
        noodlesRice.appendChild(menuItem);
    });

    menuContainer.appendChild(noodlesRice);

    content.appendChild(menuContainer);

    return content;
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.textContent = price;
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    
    return menuItem;
}

export default createMenu;