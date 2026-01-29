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

export const MENU_CATEGORIES = [
    {
        id: "hot-coffee",
        title: "HOT COFFEE",
        items: [
            {
                id: 101,
                name: "Cappuccino",
                price: "₹50",
                desc: "Classic frothy delight with cocoa dust.",
                available: true
            },
            {
                id: 102,
                name: "Mocaccino",
                price: "₹70",
                desc: "A perfect blend of coffee and chocolate.",
                available: true
            },
            {
                id: 103,
                name: "Espresso Single Shot",
                price: "₹40",
                desc: "Pure, intense caffeine kick.",
                available: true
            },
            {
                id: 104,
                name: "Americano",
                price: "₹50",
                desc: "Rich espresso softened with hot water.",
                available: true
            },
            {
                id: 105,
                name: "Cafe Latte",
                price: "₹60",
                desc: "Smooth, milky, and mild.",
                available: true
            }
        ]
    },
    {
        id: "cold-coffee",
        title: "COLD COFFEE",
        items: [
            {
                id: 201,
                name: "Classic Cold Coffee",
                price: "₹40",
                desc: "The chilled classic everyone loves.",
                available: true
            },
            {
                id: 202,
                name: "Chocolate Cold Coffee",
                price: "₹40",
                desc: "Infused with rich chocolate syrup.",
                available: true
            },
            {
                id: 203,
                name: "Oreo Shake",
                price: "₹50",
                desc: "Crunchy Oreo bits blended with vanilla.",
                available: true
            },
            {
                id: 204,
                name: "Brownie Shake",
                price: "₹60",
                desc: "Thick fudge brownie blended to perfection.",
                available: true
            }
        ]
    },
    {
        id: "mocktails",
        title: "MOCKTAILS",
        items: [
            {
                id: 301,
                name: "Margarita",
                price: "₹60",
                desc: "Zesty lime and mint refreshment.",
                available: true
            },
            {
                id: 302,
                name: "Pinacolada",
                price: "₹60",
                desc: "Tropical coconut and pineapple vibes.",
                available: true
            },
            {
                id: 303,
                name: "Shirley Temple",
                price: "₹60",
                desc: "Sweet grenadine and lemon fizz.",
                available: true
            },
            {
                id: 304,
                name: "Black Ice",
                price: "₹80",
                desc: "Deep berry flavor with a cool finish.",
                available: true
            },
            {
                id: 305,
                name: "White Lady",
                price: "₹80",
                desc: "Creamy vanilla twist.",
                available: true
            }
        ]
    },
    {
        id: "seasonal",
        title: "SEASONAL MOOD",
        items: [
            {
                id: 401,
                name: "Mango Mood",
                price: "₹30",
                desc: "Fresh seasonal mango blast.",
                available: true
            }
        ]
    }
];