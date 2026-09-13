/* =========================================================
   REMIX — local example data
   No API calls: this stands in for what would normally come
   from the Flask backend / database. Swap this out for real
   data passed from your Flask routes (e.g. render_template
   with a `products` variable) whenever you're ready.
   ========================================================= */

// Colour cycle used to fake product "photos" with plain CSS.
const SWATCH_COLORS = ["#780000", "#C1121F", "#003049", "#669BBC", "#5c3d2e"];

const BASES = [
    {
        id: "b1",
        name: "Raven Denim Jacket",
        type: "Jacket",
        price: 128,
        badge: "Best Seller",
        soldOut: false,
        icon: "🧥",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b2",
        name: "Onyx Hoodie",
        type: "Hoodie",
        price: 94,
        badge: "Limited Run",
        soldOut: false,
        icon: "🖤",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b3",
        name: "Oceanside Denim Jacket",
        type: "Jacket",
        price: 128,
        badge: null,
        soldOut: false,
        icon: "🌊",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b4",
        name: "Nightfall Workwear Jacket",
        type: "Jacket",
        price: 138,
        badge: "Trending",
        soldOut: false,
        icon: "🌙",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b5",
        name: "Slate Hoodie",
        type: "Hoodie",
        price: 94,
        badge: "Limited Run",
        soldOut: true,
        icon: "🪨",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b6",
        name: "Cobalt Denim Jacket",
        type: "Jacket",
        price: 128,
        badge: "Limited Run",
        soldOut: true,
        icon: "🔷",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b7",
        name: "Indigo Denim Jacket",
        type: "Jacket",
        price: 128,
        badge: "Limited Run",
        soldOut: false,
        icon: "🟦",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b8",
        name: "Sage Hoodie",
        type: "Hoodie",
        price: 94,
        badge: "Limited Run",
        soldOut: true,
        icon: "🌿",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b9",
        name: "Tan Workwear Jacket",
        type: "Jacket",
        price: 138,
        badge: null,
        soldOut: false,
        icon: "🏜️",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b10",
        name: "Blu Stone Denim Jacket",
        type: "Jacket",
        price: 128,
        badge: null,
        soldOut: false,
        icon: "🔵",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b11",
        name: "Ash Hoodie",
        type: "Hoodie",
        price: 94,
        badge: "Trending",
        soldOut: false,
        icon: "🌫️",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    },

    {
        id: "b12",
        name: "Rust Workwear Jacket",
        type: "Jacket",
        price: 138,
        badge: null,
        soldOut: false,
        icon: "🍂",
        image: "https://swapwear.com/cdn/shop/files/raven-swapwear-jacket-front-panel.webp?v=1776110680&width=900"
    }
];

const ARTISTS = ["Alex Almeida", "Tonton Art", "Julie Amlin", "Marcos Abdallah", "Reika Sato", "Devon Cole"];

const SWAPS = [
    {
        id: "s1",
        name: "Eternal Fungi Patch",
        artist: "Alex Almeida",
        price: 0,
        free: true,
        created: 12,
        popularity: 98,
        icon: "🍄",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s2",
        name: "Sugar Rush Patch",
        artist: "Tonton Art",
        price: 0,
        free: true,
        created: 11,
        popularity: 91,
        icon: "🍬",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s3",
        name: "Garden Florals Patch",
        artist: "Julie Amlin",
        price: 14,
        free: false,
        created: 10,
        popularity: 87,
        icon: "🌸",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s4",
        name: "Soul of the Retro Wave Patch",
        artist: "Marcos Abdallah",
        price: 16,
        free: false,
        created: 9,
        popularity: 95,
        icon: "🌆",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s5",
        name: "What a Time to Be Alive Patch",
        artist: "Reika Sato",
        price: 14,
        free: false,
        created: 8,
        popularity: 80,
        icon: "⏳",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s6",
        name: "Ryujin Patch",
        artist: "Devon Cole",
        price: 18,
        free: false,
        created: 7,
        popularity: 99,
        icon: "🐉",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s7",
        name: "Sword of Damocles Patch",
        artist: "Alex Almeida",
        price: 16,
        free: false,
        created: 6,
        popularity: 76,
        icon: "⚔️",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s8",
        name: "Yamato Patch",
        artist: "Tonton Art",
        price: 18,
        free: false,
        created: 5,
        popularity: 88,
        icon: "🚢",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s9",
        name: "Toxic Patch",
        artist: "Julie Amlin",
        price: 12,
        free: false,
        created: 4,
        popularity: 70,
        icon: "☣️",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s10",
        name: "Imaginary Friends Patch",
        artist: "Marcos Abdallah",
        price: 14,
        free: false,
        created: 3,
        popularity: 83,
        icon: "🧸",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s11",
        name: "Coffee Dark Liquid Patch",
        artist: "Reika Sato",
        price: 12,
        free: false,
        created: 2,
        popularity: 65,
        icon: "☕",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s12",
        name: "Morning Ritual Patch",
        artist: "Devon Cole",
        price: 12,
        free: false,
        created: 1,
        popularity: 60,
        icon: "🌤️",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s13",
        name: "Matcha Patch",
        artist: "Alex Almeida",
        price: 14,
        free: false,
        created: 13,
        popularity: 90,
        icon: "🍵",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s14",
        name: "Dim Sum Patch",
        artist: "Tonton Art",
        price: 14,
        free: false,
        created: 14,
        popularity: 77,
        icon: "🥟",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s15",
        name: "Wild Fire Patch",
        artist: "Julie Amlin",
        price: 16,
        free: false,
        created: 15,
        popularity: 93,
        icon: "🔥",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    },
    {
        id: "s16",
        name: "Lunar Eclipse Patch",
        artist: "Marcos Abdallah",
        price: 18,
        free: false,
        created: 16,
        popularity: 96,
        icon: "🌑",
        image: "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=1200"
    }
];

const TESTIMONIALS = [
    {
        quote: "Beautifully crafted, perfectly weighted, and made to hold its shape. This became the center of my outfits.",
        name: "Valerie L."
    },
    {
        quote: "The quality, materials, and design feel premium without the premium markup. Easily a tremendous value.",
        name: "Maurice C."
    },
    {
        quote: "Absolutely love my jacket and panels. The workmanship is top notch, and I'll definitely be buying again.",
        name: "Sandra B."
    }
];

const FEATURED_ARTISTS = [
    {
        name: "Alex Almeida",
        images: [
            "https://swapwear.com/cdn/shop/files/matcha_patch.webp?v=1785872079&width=480",
            "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=480",
            "//swapwear.com/cdn/shop/files/wildfire_patch.webp?v=1785871486&width=480"
        ]
    },
    {
        name: "Tonton Art",
        images: [
            "https://swapwear.com/cdn/shop/files/matcha_patch.webp?v=1785872079&width=480",
            "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=480",
            "//swapwear.com/cdn/shop/files/wildfire_patch.webp?v=1785871486&width=480"
        ]
    },
    {
        name: "Julie Amlin",
        images: [
            "https://swapwear.com/cdn/shop/files/matcha_patch.webp?v=1785872079&width=480",
            "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=480",
            "//swapwear.com/cdn/shop/files/wildfire_patch.webp?v=1785871486&width=480"
        ]
    },
    {
        name: "Marcos Abdallah",
        images: [
            "https://swapwear.com/cdn/shop/files/matcha_patch.webp?v=1785872079&width=480",
            "https://cdn.shopify.com/s/files/1/0569/1159/3653/files/twilightbotanica_patch.webp?v=1785872063&width=480",
            "//swapwear.com/cdn/shop/files/wildfire_patch.webp?v=1785871486&width=480"
        ]
    }
];

const FAQS = [
    {
        q: "Can I buy more panels later?",
        a: "Yes. Every REMIX base and art panel is designed to stay compatible with every addition to the lineup."
    },
    {
        q: "Is it comfortable?",
        a: "Our hardware is engineered to feel invisible. After dozens of prototypes we refined every detail so the system stays secure and unnoticeable in wear."
    },
    {
        q: "How durable is the hardware?",
        a: "REMIX pieces are built for everyday wear with premium zippers and low-profile hook-and-loop that stays secure without losing its shape."
    },
    {
        q: "Can it be washed?",
        a: "Yes — swap the art panel back to the base's original panel before washing, then wash the base cold. Spot-clean panels as needed."
    },
    {
        q: "How do you support artists?",
        a: "We're built with real creators around the world. Every panel features original, human-made artwork, with a portion of each sale paid directly to the artist."
    }
];
