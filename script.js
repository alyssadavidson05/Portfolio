// Display a greeting based on the time of day
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

// Dynamically change the header depending on season
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Get the current month
    const currentMonth = new Date().getMonth();

    // Changes bakcground gradient, text color, and motifs depnding on the season
    const themes = {
        // icy blue with snowflakes
        winter: {
            background: "linear-gradient(to bottom, #f7f9fc, #dfe9f3)",
            textColor: "#2d3a4b",
            decoration: "❄️",
        },
        // pastel green with a flower
        spring: {
            background: "linear-gradient(to bottom, #fdf6e4, #d3eac9)",
            textColor: "#3a6351",
            decoration: "🌸",
        },
        // warm biege with a sun
        summer: {
            background: "linear-gradient(to bottom, #fff9e6, #ffe7c7)",
            textColor: "#e59819",
            decoration: "☀️",
        },
        // warm tan with leaves
        fall: {
            background: "linear-gradient(to bottom, #fff3e6, #f4d5b5)",
            textColor: "#704214",
            decoration: "🍂",
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

    // Apply the styles
    const { background, textColor, decoration } = themes[season];
    header.style.background = background;
    header.style.color = textColor;

    // Update the header
    const headerTitle = header.querySelector("h1");
    headerTitle.innerHTML = `${decoration} Alyssa Davidson ${decoration}`;
});

/* Scroll function to scroll past header intially and allow smooth transitions
    when header reappears and disappears*/
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const combinedHeight = header.offsetHeight + nav.offsetHeight;
    const scrollThreshold = 50; // Threshold before the nav and header reappear
    let lastScrollY = window.scrollY;
    let isHidden = false; // Tracks is they are hidden
    let hasScrolledPast = false; // Tracks if they have been scrolled past

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > combinedHeight) {
            if (!hasScrolledPast) {
                // On the intial scroll past it hides the nav and header
                // This fixes the bug where they would reappear immediately after scrolling past
                header.style.transform = "translateY(-100%)";
                nav.style.transform = "translateY(-100%)";
                nav.style.transform = "translateX(-100%)";
                isHidden = true;
                hasScrolledPast = true; // Marks as scrolled past
            } else if (currentScrollY > lastScrollY && !isHidden) {
                // Hides the nav and header when scrolling down
                // If they are not in the fixed position they do not smoothly transition
                header.style.position = "fixed";
                nav.style.position = "fixed";
                header.style.transform = "translateY(-100%)";
                nav.style.transform = "translateY(-100%)";
                nav.style.transform = "translateX(-100%)";
                nav.style.top = `${header.offsetHeight}px`;
                isHidden = true;
            } else if (currentScrollY < lastScrollY - scrollThreshold && isHidden) {
                // Shows the nav and header when scrolling up
                header.style.position = "fixed";
                nav.style.position = "fixed";
                header.style.transform = "translateY(0)";
                nav.style.transform = "translateY(0)";
                nav.style.transform = "translateX(0)";
                nav.style.top = `${header.offsetHeight}px`;
                isHidden = false;
            }
        } else {
            // Back at the top of page
            // Refers back to intial scroll past
            header.style.position = "relative";
            nav.style.position = "relative";
            header.style.transform = "translateY(0)";
            nav.style.transform = "translateY(0)";
            nav.style.transform = "translateX(0)";
            nav.style.top = 0;
            isHidden = false;
            hasScrolledPast = false; // Reset scrolled past
        }

        lastScrollY = currentScrollY; // Update the scroll position
    }

    // waits for the scroll
    window.addEventListener("scroll", handleScroll);
});

// Creates indicators for the caousel in the FRC Robotics Images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const indicators = document.querySelectorAll(".indicator");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let current = 0;

    // Updates the state of the carousel
    function updateCarousel() {
        // Loops through all images/indicators to toggle class based on the index
        images.forEach((img, index) => {
            img.classList.toggle("active", index === current);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === current);
        });
    }

    // Once the prev button is clicked it will move to the previous image
    prev.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Once the next button is clicked it will move to the next image
    next.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateCarousel();
    });

    // Updates the indicator so user knows which image they are on
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            current = parseInt(indicator.dataset.index, 10);
            updateCarousel();
        });
    });

    updateCarousel(); // Initialize the carousel
});
