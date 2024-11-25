// Example: Display a greeting based on the time of day
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    header.innerHTML += `<p>${greeting}</p>`;
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Get the current month
    const currentMonth = new Date().getMonth();

    // Define refined seasonal themes
    const themes = {
        winter: {
            background: "linear-gradient(to bottom, #f7f9fc, #dfe9f3)", // Soft icy blue
            textColor: "#2d3a4b", // Dark gray
            decoration: "❄️", // Single snowflake
        },
        spring: {
            background: "linear-gradient(to bottom, #fdf6e4, #d3eac9)", // Soft cream and pastel green
            textColor: "#3a6351", // Forest green
            decoration: "🌸", // Single cherry blossom
        },
        summer: {
            background: "linear-gradient(to bottom, #fff9e6, #ffe7c7)", // Warm beige and peach
            textColor: "#e59819", // Subtle golden yellow
            decoration: "☀️", // Simple sun icon
        },
        fall: {
            background: "linear-gradient(to bottom, #fff3e6, #f4d5b5)", // Warm cream and tan
            textColor: "#704214", // Earthy brown
            decoration: "🍂", // Single leaf
        },
    };

    // Determine the current season
    let season;
    if (currentMonth >= 2 && currentMonth <= 4) {
        season = "spring";
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        season = "summer";
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        season = "fall";
    } else {
        season = "winter";
    }

    // Apply seasonal styles to the header
    const { background, textColor, decoration } = themes[season];
    header.style.background = background;
    header.style.color = textColor;

    // Update header title with decoration
    const headerTitle = header.querySelector("h1");
    headerTitle.innerHTML = `${decoration} Alyssa Davidson ${decoration}`;
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down - hide nav
            nav.classList.add("hidden");
            nav.classList.remove("visible");
        } else {
            // Scrolling up - show nav
            nav.classList.add("visible");
            nav.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const indicators = document.querySelectorAll(".indicator");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let current = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === current);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === current);
        });
    }

    prev.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateCarousel();
    });

    next.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateCarousel();
    });

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            current = parseInt(indicator.dataset.index, 10);
            updateCarousel();
        });
    });

    updateCarousel(); // Initialize the carousel
});
