const text = "Matheus Balbe";
const heroH1name = document.getElementById("heroH1name");
let index = 0;

function typeEffect() {
if (index <= text.length) {
    heroH1name.textContent = text.substring(0, index) + (index < text.length ? "|" : ""); // Add the blinking cursor
    index++;
    setTimeout(typeEffect, 100); // Adjust speed by changing the timeout value
} else {
    heroH1name.textContent = text; // Remove the cursor after typing is complete
}
}

typeEffect();