// ---------- RESTAURANT DATA (with prices) ----------
const restaurants = [
    {
        name: "KIPS",
        food: [
            { name: "Egg Roll", price: 10300 },
            { name: "1 Fried Chicken & Chips", price: 9270 },
            { name: "Chips & Sausage", price: 11330 },
            { name: "Chips & Eggs", price: 7210 },
            { name: "Chicken Piece", price: 5665 },
            { name: "Nsima & Chambo", price: 20600 },
            { name: "1 Chicken Stew & Chips", price: 10300 },
            { name: "Beef Stew & Chips", price: 11330 },
            { name: "Sausage", price: 5665 },
            { name: "Beef Samosas", price: 1751 },
            { name: "Burger", price: 10300 },
            { name: "Delicious Burger", price: 13390 },
            { name: "Large Pizza", price: 38000 },
            { name: "Medium Pizza", price: 34000 },
            { name: "Small Pizza", price: 28000 },
            { name: "Egg Sandwich", price: 7210 },
            { name: "Club Sandwich", price: 16480 }
        ]
    },
    {
        name: "GALITO'S",
        food: [
            { name: "Large Pizza", price: 38000 },
            { name: "Medium Pizza", price: 34000 },
            { name: "Small Pizza", price: 28000 },
            { name: "18 Grilled Chicken", price: 45000 },
            { name: "12 Grilled Chicken", price: 32000 },
            { name: "6 Grilled Chicken", price: 18000 },
            { name: "Grilled Chicken (1 piece)", price: 7000 },
            { name: "Chicken + Chips", price: 13000 },
            { name: "12 Chicken Pieces + Large Chips", price: 38000 },
            { name: "6 Chicken + Large Chips", price: 22000 },
            { name: "3 Pieces of Chicken + Chips", price: 14000 },
            { name: "Chicken + Rice", price: 12000 },
            { name: "Chicken + Chips + Coleslaw", price: 15000 },
            { name: "Plain Chips", price: 5000 },
            { name: "Masala Chips", price: 7000 },
            { name: "Chicken Burger", price: 10000 },
            { name: "Chicken Burger + Cheese", price: 11500 },
            { name: "Chicken Burger + Cheese + Chips", price: 15500 },
            { name: "300ml Cocopina", price: 2000 },
            { name: "300ml Water", price: 1500 },
            { name: "Chilli Beans", price: 4000 },
            { name: "Coleslaw", price: 3000 },
            { name: "Spicy Rice", price: 6000 }
        ]
    },
    {
        name: "KWITHU COFFEE DEN",
        food: [
            { name: "Kwitu Breakfast", price: 17000 },
            { name: "Beef Burger", price: 19000 },
            { name: "Cheese Beef Burger", price: 21000 },
            { name: "Chicken Burger", price: 15500 },
            { name: "Chicken Sandwich", price: 14000 },
            { name: "Steak Sandwich", price: 18000 },
            { name: "Chicken Wrap", price: 16300 },
            { name: "Beef Wrap", price: 19000 },
            { name: "Grilled Chicken", price: 17000 },
            { name: "T-bone steak", price: 25000 },
            { name: "Small Pizza (BBQ Beef)", price: 22000 },
            { name: "Small Pizza (Chicken)", price: 20000 },
            { name: "Small Pizza (Vegetarian)", price: 25000 },
            { name: "Medium Pizza (BBQ Beef)", price: 27000 },
            { name: "Medium Pizza (Chicken)", price: 25000 },
            { name: "Medium Pizza (Vegetarian)", price: 28000 },
            { name: "Large Pizza (BBQ Beef)", price: 32000 },
            { name: "Large Pizza (Chicken)", price: 30000 },
            { name: "Large Pizza (Vegetarian)", price: 35000 },
            { name: "Sticky Wings", price: 19000 },
            { name: "Samosa", price: 3000 },
            { name: "Sausage", price: 3000 },
            { name: "Doughnuts", price: 1800 },
            { name: "Chocolate Doughnuts", price: 3500 },
            { name: "Egg & Toast", price: 6500 },
            { name: "Club Sandwich", price: 12000 }
        ]
    },
    {
        name: "CHICKEN LITO'S",
        food: [
            { name: "Chicken + Rice", price: 21000 },
            { name: "Chicken + Chips + Coleslaw", price: 24500 },
            { name: "Plain Chips", price: 9000 },
            { name: "Masala Chips", price: 11000 },
            { name: "Chicken Burger", price: 20000 },
            { name: "Chicken Burger + Cheese", price: 21500 },
            { name: "Large Pizza", price: 38000 },
            { name: "Medium Pizza", price: 34000 }
        ]
    },
    {
        name: "MEAT ZONE",
        food: [
            { name: "Masala Chips", price: 6000 },
            { name: "Chips & Eggs", price: 9000 },
            { name: "Peri Peri Wings", price: 12000 },
            { name: "Chicken Wings", price: 17000 },
            { name: "Grilled Chicken", price: 20000 },
            { name: "Char-grilled Pork ribs", price: 18000 },
            { name: "T-bone Steak", price: 16000 },
            { name: "Nsima & Chambo", price: 18000 },
            { name: "Stir-Fried Beef", price: 9500 },
            { name: "Chicken Sandwich", price: 14000 },
            { name: "Steak Sandwich", price: 16000 },
            { name: "Chicken Wrap", price: 15000 },
            { name: "Beef Wrap", price: 16000 },
            { name: "Egg & Toast", price: 6500 },
            { name: "Club Sandwich", price: 12000 }
        ]
    },
    {
        name: "BELLA'S FOOD COURT",
        food: [
            { name: "Chicken Burger", price: 11000 },
            { name: "Classic Burger", price: 12000 },
            { name: "Chips & Chicken", price: 13000 },
            { name: "Chicken Wrap", price: 12000 },
            { name: "Beef Wrap", price: 13000 },
            { name: "Chicken Pizza", price: 20000 },
            { name: "Hawaiian Pizza", price: 22000 },
            { name: "Veggie Pizza", price: 20000 },
            { name: "Meat Lovers", price: 25000 },
            { name: "T-bone Steak (Chips/Rice)", price: 18000 },
            { name: "Local Chicken (Nsima/Rice)", price: 15000 },
            { name: "Chambo (Rice/Nsima)", price: 18000 },
            { name: "Grilled Chicken (Chips/Rice)", price: 16000 },
            { name: "Beef Stir Fry", price: 12000 },
            { name: "Samosas", price: 4000 },
            { name: "Sausages", price: 4000 },
            { name: "Chicken Wings", price: 12000 }
        ]
    }
];

// ---------- LOGO MAP (with .jpeg extension) ----------
const logoMap = {
    "KIPS": "images/kips.jpeg",
    "GALITO'S": "images/galitos.jpeg",
    "KWITHU COFFEE DEN": "images/kwithu-coffee-logo.jpeg",
    "CHICKEN LITO'S": "images/chicken-litos-logo.jpeg",
    "MEAT ZONE": "images/meat-zone-logo.jpeg",
    "BELLA'S FOOD COURT": "images/bellas-food-logo.jpeg"
};

// ---------- IMAGE MAPPING (with .jpeg extension) ----------
const imageMap = {
    "Egg Roll": "egg-roll.jpeg",
    "1 Fried Chicken & Chips": "fried-chicken-chips.jpeg",
    "Chips & Sausage": "chips-sausage.jpeg",
    "Chips & Eggs": "chips-egg.jpeg",
    "Chicken Piece": "chicken-piece.jpeg",
    "Nsima & Chambo": "nsima-chambo.jpeg",
    "1 Chicken Stew & Chips": "chicken-chips.jpeg",
    "Beef Stew & Chips": "beef-chips.jpeg",
    "Sausage": "sausages.jpeg",
    "Beef Samosas": "beef-samosas.jpeg",
    "Burger": "burger.jpeg",
    "Delicious Burger": "delicious-burger.jpeg",
    "Large Pizza": "galitos-large-pizza.jpeg",
    "Medium Pizza": "galitos-medium-pizza.jpeg",
    "Small Pizza": "galitos-small-pizza.jpeg",
    "Egg Sandwich": "egg-sandwich.jpeg",
    "Club Sandwich": "club-sandwich.jpeg",
    "18 Grilled Chicken": "galitos-eighteen-chicken.jpeg",
    "12 Grilled Chicken": "galitos-twelve-chicken.jpeg",
    "6 Grilled Chicken": "galitos-six-chicken.jpeg",
    "Grilled Chicken (1 piece)": "galitos-one-chicken.jpeg",
    "Chicken + Chips": "galitos-chips-chicken.jpeg",
    "12 Chicken Pieces + Large Chips": "galitos-twelve-chips.jpeg",
    "6 Chicken + Large Chips": "galitos-six-chips.jpeg",
    "3 Pieces of Chicken + Chips": "galitos-three-chips.jpeg",
    "Chicken + Rice": "galitos-rice-chicken.jpeg",
    "Chicken + Chips + Coleslaw": "galitos-coleslaw-chips-chicken.jpeg",
    "Plain Chips": "galitos-plain-chips.jpeg",
    "Masala Chips": "galitos-masala-chips.jpeg",
    "Chicken Burger": "galitos-chicken-burger.jpeg",
    "Chicken Burger + Cheese": "galitos-cheese-chicken-burger.jpeg",
    "Chicken Burger + Cheese + Chips": "galitos-chicken-burger-chips.jpeg",
    "300ml Cocopina": "galitos-cocopina.jpeg",
    "300ml Water": "galitos-water.jpeg",
    "Chilli Beans": "galitos-chilli-beans.jpeg",
    "Coleslaw": "galitos-coleslaw.jpeg",
    "Spicy Rice": "galitos-spicy-rice.jpeg",
    "Kwitu Breakfast": "kwithu-breakfast.jpeg",
    "Beef Burger": "kwithu-beef-burger.jpeg",
    "Cheese Beef Burger": "kwithu-beef-cheese-burger.jpeg",
    "Chicken Sandwich": "kwithu-chicken-sandwich.jpeg",
    "Steak Sandwich": "kwithu-steak-sandwich.jpeg",
    "Chicken Wrap": "kwithu-chicken-wrap.jpeg",
    "Beef Wrap": "kwithu-beef-wrap.jpeg",
    "T-bone steak": "kwithu-t-bone-steak.jpeg",
    "Small Pizza (BBQ Beef)": "kwithu-small-bbq-pizza.jpeg",
    "Small Pizza (Chicken)": "kwithu-small-chicken-pizza.jpeg",
    "Small Pizza (Vegetarian)": "kwithu-small-veggie-pizza.jpeg",
    "Medium Pizza (BBQ Beef)": "kwithu-medium-bbq-pizza.jpeg",
    "Medium Pizza (Chicken)": "galitos-small-pizza.jpeg",
    "Medium Pizza (Vegetarian)": "kwithu-small-veggie-pizza.jpeg",
    "Large Pizza (BBQ Beef)": "kwithu-small-bbq-pizza.jpeg",
    "Large Pizza (Chicken)": "large-pizza.jpeg",
    "Large Pizza (Vegetarian)": "kwithu-small-veggie-pizza.jpeg",
    "Sticky Wings": "kwithu-sticky-wings.jpeg",
    "Samosa": "samosas.jpeg",
    "Doughnuts": "kwithu-doughnuts.jpeg",
    "Chocolate Doughnuts": "kwithu-chocolate-doughnuts.jpeg",
    "Egg & Toast": "kwithu-egg-toast.jpeg",
    "Peri Peri Wings": "meatzone-peri-peri-wings.jpeg",
    "Chicken Wings": "chicken-wings.jpeg",
    "Grilled Chicken": "grilled-chicken.jpeg",
    "Char-grilled Pork ribs": "meatzone-pork-ribs.jpeg",
    "T-bone Steak": "kwithu-t-bone-steak.jpeg",
    "Beef Stir Fry": "stir-fried-beef.jpeg",
    "Chips & Chicken": "chicken-chips.jpeg",
    "Classic Burger": "bellas-classic-burger.jpeg",
    "Chicken Pizza": "kwithu-small-chicken-pizza.jpeg",
    "Hawaiian Pizza": "bellas-hawaiian-pizza.jpeg",
    "Veggie Pizza": "kwithu-small-veggie-pizza.jpeg",
    "Meat Lovers": "bellas-meat-lovers.jpeg",
    "T-bone Steak (Chips/Rice)": "bellas-tbone-chips.jpeg",
    "Local Chicken (Nsima/Rice)": "bellas-local-food.jpeg",
    "Chambo (Rice/Nsima)": "bellas-nsima-chambo.jpeg",
    "Grilled Chicken (Chips/Rice)": "grilled-chicken-chips.jpeg",
    "Samosas": "samosas.jpeg",
    "Sausages": "sausages.jpeg"
};

function getFoodImageSrc(itemName) {
    // Normalize: remove special chars, try direct map, else fallback
    const cleanName = itemName.trim();
    if (imageMap[cleanName]) {
        return "images/" + imageMap[cleanName];
    }
    // Fallback: create filename from name with .jpeg extension
    let filename = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.jpeg';
    return "images/" + filename;
}

// ---------- CART ----------
let cart = [];

// DOM elements
const tilesContainer = document.getElementById('restaurant-tiles');
const foodMenuDiv = document.getElementById('food-menu');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const totalSpan = document.getElementById('total');
const clearBtn = document.getElementById('clearCartBtn');
const orderBtn = document.getElementById('orderViaWABtn');
const nameInput = document.getElementById('customerName');
const locationInput = document.getElementById('customerLocation');
const phoneInput = document.getElementById('customerPhone');

// Render restaurant tiles with logos
function renderRestaurantTiles() {
    let html = '';
    restaurants.forEach(rest => {
        // Use logo from map, otherwise fallback to generated filename
        let logoSrc = logoMap[rest.name];
        if (!logoSrc) {
            logoSrc = `images/rest-${rest.name.toLowerCase().replace(/\s+/g, '')}.jpeg`;
        }
        html += `
            <div class="restaurant-tile" data-restaurant="${rest.name}">
                <img class="tile-img" src="${logoSrc}" alt="${rest.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(rest.name)}'">
                <h3>${rest.name}</h3>
            </div>
        `;
    });
    tilesContainer.innerHTML = html;

    document.querySelectorAll('.restaurant-tile').forEach(tile => {
        tile.addEventListener('click', function() {
            document.querySelectorAll('.restaurant-tile').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderFoodMenu(this.dataset.restaurant);
        });
    });
}

// Render food menu for selected restaurant
function renderFoodMenu(restName) {
    const restaurant = restaurants.find(r => r.name === restName);
    if (!restaurant) return;

    let foodHtml = `<div class="menu-title"><i class="fas fa-utensils"></i> ${restaurant.name} Menu</div>`;
    foodHtml += `<div class="food-grid">`;

    restaurant.food.forEach(item => {
        const imgSrc = getFoodImageSrc(item.name);
        foodHtml += `
            <div class="food-card">
                <img class="food-img" src="${imgSrc}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}'">
                <div class="item-name">${item.name}</div>
                <div class="item-price">MK ${item.price.toLocaleString()}</div>
                <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}" data-restaurant="${restaurant.name}">
                    <i class="fas fa-cart-plus"></i> Add
                </button>
            </div>
        `;
    });
    foodHtml += `</div>`;
    foodMenuDiv.innerHTML = foodHtml;

    // Add to cart listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price);
            const restaurant = this.dataset.restaurant;
            cart.push({ name, price, restaurant });
            renderCart();
        });
    });
}

// Render cart
function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div style="text-align: center; color: #b9a99b; padding: 1.2rem;">Your cart is empty</div>`;
    } else {
        let itemsHtml = '';
        cart.forEach((item, index) => {
            itemsHtml += `
                <div class="cart-item">
                    <span class="cart-item-name">${item.name} <small>(${item.restaurant})</small></span>
                    <span class="cart-item-price">MK ${item.price.toLocaleString()}</span>
                    <button class="remove-item" data-index="${index}"><i class="fas fa-times-circle"></i></button>
                </div>
            `;
        });
        cartItemsContainer.innerHTML = itemsHtml;

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                renderCart();
            });
        });
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalSpan.innerText = `MK ${total.toLocaleString()}`;
}

// Clear cart
clearBtn.addEventListener('click', function() {
    if (cart.length === 0) return;
    if (confirm('Clear your cart?')) {
        cart = [];
        renderCart();
    }
});

// Order via WhatsApp
orderBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const location = locationInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !location || !phone) {
        alert('Please fill in your name, location, and phone number.');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    let message = `Hello Phindu Food Delivery! I'd like to order:\n`;
    cart.forEach((item, i) => {
        message += `${i+1}. ${item.name} (${item.restaurant}) - MK ${item.price}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nSubtotal: MK ${total}\nName: ${name}\nLocation: ${location}\nPhone: ${phone}\n`;

    const encodedMessage = encodeURIComponent(message);
    // Replace with actual WhatsApp number
    const whatsappNumber = '265881006198'; // Change to real number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

// Initial render
renderRestaurantTiles();
// Optionally show first restaurant menu
if (restaurants.length > 0) {
    renderFoodMenu(restaurants[0].name);
    document.querySelector('.restaurant-tile')?.classList.add('active');
}