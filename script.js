// Typing Effect
const text = ["Web Developer", "CSE Student", "UI Designer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < text[index].length) {
        document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typing").innerHTML =
            text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Button
function showMessage() {
    alert("Thanks for reaching out! 😊");
}