// src/data/config.js

// --- QUICK EDIT PRICE LIST ---
export const PRICES = {
    // Hot Coffee
    cappuccino: "₹50",
    mocaccino: "₹70",
    espresso: "₹40",
    americano: "₹50",
    latte: "₹60",
    
    // Cold Coffee & Shakes
    classicCold: "₹40",
    chocolateCold: "₹40",
    oreoShake: "₹50",
    brownieShake: "₹60",
    
    // Mocktails
    margarita: "₹60",
    pinacolada: "₹60",
    shirleyTemple: "₹60",
    blackIce: "₹80",
    whiteLady: "₹80",
    
    // Seasonal
    mangoMood: "₹30"
};

export const SITE_CONFIG = {
    name: "Rainbow Cafe",
    tagline: "SIP THE HAPPINESS",
    quote: {
        line1: "Friends bring happiness...",
        line2: "Best friends bring coffee."
    },
    contact: {
        phone: "075840 62468",
        email: "rainbowcafe110821@gmail.com",
        address: "Food Zone, College Rd, Midnapore, West Bengal 721101",
        mapLink: "https://maps.app.goo.gl/9Z6v5mY9z6v5mY9z6" 
    },
    theme: {
        primary: "#fca311",
        bg: "#0f0f0f",
        text: "#ffffff"
    },
    hero: {
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
        title: "MIDNAPORE'S FINEST",
        subtitle: "Freshly brewed 100% Arabica coffee."
    }
};

export const MENU_CATEGORIES = [
    {
        id: "hot-coffee",
        title: "HOT COFFEE",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                id: 101,
                name: "Cappuccino",
                price: PRICES.cappuccino,
                desc: "Classic frothy delight with cocoa dust.",
                ingredients: "Double Shot Espresso, Steamed Milk, Thick Foam, Cocoa Powder",
                tags: ["Best Seller", "100% Arabica"],
                image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 102,
                name: "Mocaccino",
                price: PRICES.mocaccino,
                desc: "A perfect blend of coffee and chocolate.",
                ingredients: "Espresso, Dark Chocolate Sauce, Steamed Milk, Whipped Cream",
                tags: ["Chocolatey", "Sweet"],
                image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=1913&auto=format&fit=crop",
                available: true
            },
            {
                id: 103,
                name: "Espresso Single Shot",
                price: PRICES.espresso,
                desc: "Pure, intense caffeine kick.",
                ingredients: "Fine Ground Arabica Coffee, Hot Water (30ml)",
                tags: ["High Caffeine", "Strong"],
                image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1770&auto=format&fit=crop",
                available: true
            },
            {
                id: 104,
                name: "Americano",
                price: PRICES.americano,
                desc: "Rich espresso softened with hot water.",
                ingredients: "Double Shot Espresso, Hot Water",
                tags: ["Low Calorie", "Smooth"],
                image: "https://images.pexels.com/photos/5253025/pexels-photo-5253025.jpeg",
                available: true
            },
            {
                id: 105,
                name: "Cafe Latte",
                price: PRICES.latte,
                desc: "Smooth, milky, and mild.",
                ingredients: "Espresso, Lots of Steamed Milk, Light Foam",
                tags: ["Mild", "Creamy"],
                image: "https://images.pexels.com/photos/302900/pexels-photo-302900.jpeg",
                available: true
            }
        ]
    },
    {
        id: "cold-coffee",
        title: "COLD COFFEE",
        image: "https://images.pexels.com/photos/32536549/pexels-photo-32536549.jpeg",
        items: [
            {
                id: 201,
                name: "Classic Cold Coffee",
                price: PRICES.classicCold,
                desc: "The chilled classic everyone loves.",
                ingredients: "Coffee Decoction, Chilled Milk, Sugar, Ice Cubes",
                tags: ["Classic", "Refreshing"],
                image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 202,
                name: "Chocolate Cold Coffee",
                price: PRICES.chocolateCold,
                desc: "Infused with rich chocolate syrup.",
                ingredients: "Coffee, Milk, Hershey's Chocolate Syrup, Ice",
                tags: ["Chocolatey", "Kids Choice"],
                image: "https://images.pexels.com/photos/12261098/pexels-photo-12261098.jpeg",
                available: true
            },
            {
                id: 203,
                name: "Oreo Shake",
                price: PRICES.oreoShake,
                desc: "Crunchy Oreo bits blended with vanilla.",
                ingredients: "4 Oreo Biscuits, Vanilla Ice Cream, Chilled Milk",
                tags: ["Crunchy", "Thick"],
                image: "https://images.pexels.com/photos/28525199/pexels-photo-28525199.jpeg",
                available: true
            },
            {
                id: 204,
                name: "Brownie Shake",
                price: PRICES.brownieShake,
                desc: "Thick fudge brownie blended to perfection.",
                ingredients: "Eggless Chocolate Brownie, Milk, Chocolate Sauce",
                tags: ["Heavy", "Dessert"],
                image: "https://images.pexels.com/photos/6680481/pexels-photo-6680481.jpeg",
                available: true
            }
        ]
    },
    {
        id: "mocktails",
        title: "MOCKTAILS",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1887&auto=format&fit=crop",
        items: [
            {
                id: 301,
                name: "Margarita",
                price: PRICES.margarita,
                desc: "Zesty lime and mint refreshment.",
                ingredients: "Fresh Lime Juice, Mint Leaves, Simple Syrup, Club Soda",
                tags: ["Non-Alcoholic", "Zesty"],
                image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1816&auto=format&fit=crop",
                available: true
            },
            {
                id: 302,
                name: "Pinacolada",
                price: PRICES.pinacolada,
                desc: "Tropical coconut and pineapple vibes.",
                ingredients: "Pineapple Juice, Coconut Cream, Crushed Ice",
                tags: ["Tropical", "Sweet"],
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1770&auto=format&fit=crop",
                available: true
            },
            {
                id: 303,
                name: "Shirley Temple",
                price: PRICES.shirleyTemple,
                desc: "Sweet grenadine and lemon fizz.",
                ingredients: "Ginger Ale, Grenadine Syrup, Maraschino Cherry",
                tags: ["Fizzy", "Sweet"],
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 304,
                name: "Black Ice",
                price: PRICES.blackIce,
                desc: "Deep berry flavor with a cool finish.",
                ingredients: "Blackberry Extract, Mint, Lemon, Soda",
                tags: ["Cool", "Exotic"],
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1914&auto=format&fit=crop",
                available: true
            },
            {
                id: 305,
                name: "White Lady",
                price: PRICES.whiteLady,
                desc: "Creamy vanilla twist.",
                ingredients: "Cream, Vanilla Syrup, Lemon Juice, Egg White (Alternative)",
                tags: ["Sophisticated", "Smooth"],
                image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1887&auto=format&fit=crop",
                available: true
            }
        ]
    },
    {
        id: "seasonal",
        title: "SEASONAL MOOD",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1974&auto=format&fit=crop",
        items: [
            {
                id: 401,
                name: "Mango Mood",
                price: PRICES.mangoMood,
                desc: "Fresh seasonal mango blast.",
                ingredients: "Fresh Alphonso Mango Pulp, Chilled Milk, Honey",
                tags: ["Fresh", "Seasonal"],
                image: "https://images.pexels.com/photos/5817624/pexels-photo-5817624.jpeg",
                available: true
            }
        ]
    }
];

export const GALLERY_IMAGES = [
    { id: 1, url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg", date: "Jan 15, 2026" },
    { id: 2, url: "https://images.pexels.com/photos/1230671/pexels-photo-1230671.jpeg", date: "Jan 18, 2026" },
    { id: 3, url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", date: "Jan 20, 2026" },
    { id: 4, url: "https://images.pexels.com/photos/302900/pexels-photo-302900.jpeg", date: "Jan 22, 2026" },
    { id: 5, url: "https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg", date: "Jan 24, 2026" },
    { id: 6, url: "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg", date: "Jan 26, 2026" },
    { id: 7, url: "https://images.pexels.com/photos/1193334/pexels-photo-1193334.jpeg", date: "Jan 28, 2026" },
    { id: 8, url: "https://images.pexels.com/photos/3313010/pexels-photo-3313010.jpeg", date: "Jan 30, 2026" },
    { id: 9, url: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg", date: "Feb 01, 2026" },
    { id: 10, url: "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg", date: "Feb 03, 2026" },
    { id: 11, url: "https://images.pexels.com/photos/1230670/pexels-photo-1230670.jpeg", date: "Feb 05, 2026" },
    { id: 12, url: "https://images.pexels.com/photos/4349733/pexels-photo-4349733.jpeg", date: "Feb 07, 2026" }
];