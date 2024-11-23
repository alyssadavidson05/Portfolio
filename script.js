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
