// src/data/config.js

export const SITE_CONFIG = {
    name: "Rainbow Cafe",
    tagline: "SIP THE HAPPINESS",
    // The exact quote from his Google Maps cover photo for the loader/hero
    quote: {
        line1: "Friends bring happiness...",
        line2: "Best friends bring coffee."
    },
    contact: {
        phone: "075840 62468",
        email: "rainbowcafe110821@gmail.com", // Found on his menu card
        address: "Food Zone, College Rd, Midnapore, West Bengal 721101",
        mapLink: "https://maps.app.goo.gl/YourMapLinkHere" // You can add his real map link later
    },
    // Theme colors for easy swapping later
    theme: {
        primary: "#fca311", // The 'Gold' accent color
        bg: "#0f0f0f",      // Dark mode background
        text: "#ffffff"
    },
    hero: {
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop", // High-quality dark coffee BG
        title: "MIDNAPORE'S FINEST",
        subtitle: "Freshly brewed 100% Arabica coffee."
    }
};

// src/data/config.js

// src/data/config.js

export const MENU_CATEGORIES = [
    {
        id: "hot-coffee",
        title: "HOT COFFEE",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                id: 101,
                name: "Cappuccino",
                price: "₹50",
                desc: "Classic frothy delight with cocoa dust.",
                ingredients: "Double Shot Espresso, Steamed Milk, Thick Foam, Cocoa Powder",
                tags: ["Best Seller", "100% Arabica"],
                image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 102,
                name: "Mocaccino",
                price: "₹70",
                desc: "A perfect blend of coffee and chocolate.",
                ingredients: "Espresso, Dark Chocolate Sauce, Steamed Milk, Whipped Cream",
                tags: ["Chocolatey", "Sweet"],
                image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=1913&auto=format&fit=crop",
                available: true
            },
            {
                id: 103,
                name: "Espresso Single Shot",
                price: "₹40",
                desc: "Pure, intense caffeine kick.",
                ingredients: "Fine Ground Arabica Coffee, Hot Water (30ml)",
                tags: ["High Caffeine", "Strong"],
                image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1770&auto=format&fit=crop",
                available: true
            },
            {
                id: 104,
                name: "Americano",
                price: "₹50",
                desc: "Rich espresso softened with hot water.",
                ingredients: "Double Shot Espresso, Hot Water",
                tags: ["Low Calorie", "Smooth"],
                image: "https://images.pexels.com/photos/5253025/pexels-photo-5253025.jpeg",
                available: true
            },
            {
                id: 105,
                name: "Cafe Latte",
                price: "₹60",
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
                price: "₹40",
                desc: "The chilled classic everyone loves.",
                ingredients: "Coffee Decoction, Chilled Milk, Sugar, Ice Cubes",
                tags: ["Classic", "Refreshing"],
                image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 202,
                name: "Chocolate Cold Coffee",
                price: "₹40",
                desc: "Infused with rich chocolate syrup.",
                ingredients: "Coffee, Milk, Hershey's Chocolate Syrup, Ice",
                tags: ["Chocolatey", "Kids Choice"],
                image: "https://images.pexels.com/photos/12261098/pexels-photo-12261098.jpeg",
                available: true
            },
            {
                id: 203,
                name: "Oreo Shake",
                price: "₹50",
                desc: "Crunchy Oreo bits blended with vanilla.",
                ingredients: "4 Oreo Biscuits, Vanilla Ice Cream, Chilled Milk",
                tags: ["Crunchy", "Thick"],
                image: "https://images.pexels.com/photos/28525199/pexels-photo-28525199.jpeg",
                available: true
            },
            {
                id: 204,
                name: "Brownie Shake",
                price: "₹60",
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
                price: "₹60",
                desc: "Zesty lime and mint refreshment.",
                ingredients: "Fresh Lime Juice, Mint Leaves, Simple Syrup, Club Soda",
                tags: ["Non-Alcoholic", "Zesty"],
                image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1816&auto=format&fit=crop",
                available: true
            },
            {
                id: 302,
                name: "Pinacolada",
                price: "₹60",
                desc: "Tropical coconut and pineapple vibes.",
                ingredients: "Pineapple Juice, Coconut Cream, Crushed Ice",
                tags: ["Tropical", "Sweet"],
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1770&auto=format&fit=crop",
                available: true
            },
            {
                id: 303,
                name: "Shirley Temple",
                price: "₹60",
                desc: "Sweet grenadine and lemon fizz.",
                ingredients: "Ginger Ale, Grenadine Syrup, Maraschino Cherry",
                tags: ["Fizzy", "Sweet"],
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1887&auto=format&fit=crop",
                available: true
            },
            {
                id: 304,
                name: "Black Ice",
                price: "₹80",
                desc: "Deep berry flavor with a cool finish.",
                ingredients: "Blackberry Extract, Mint, Lemon, Soda",
                tags: ["Cool", "Exotic"],
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1914&auto=format&fit=crop",
                available: true
            },
            {
                id: 305,
                name: "White Lady",
                price: "₹80",
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
                price: "₹30",
                desc: "Fresh seasonal mango blast.",
                ingredients: "Fresh Alphonso Mango Pulp, Chilled Milk, Honey",
                tags: ["Fresh", "Seasonal"],
                image: "https://images.pexels.com/photos/5817624/pexels-photo-5817624.jpeg",
                available: true
            }
        ]
    }
];

// src/data/config.js (Append to your existing file)

export const GALLERY_IMAGES = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574",
        date: "Jan 15, 2026"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070",
        date: "Jan 18, 2026"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1887",
        date: "Jan 20, 2026"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1816",
        date: "Jan 22, 2026"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
        date: "Jan 25, 2026"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1000",
        date: "Jan 28, 2026"
    }
];