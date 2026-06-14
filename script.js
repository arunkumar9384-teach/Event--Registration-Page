// Welcome alert when page opens
window.onload = function () {
    alert("Welcome to Tech Innovators Workshop 2026!");
};

// Alert when form is submitted
document.querySelector("form").addEventListener("submit", function () {
    alert("Registration Submitted Successfully!");
});

// Alert when navbar buttons are clicked
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        alert(this.innerText + " section opened");
    });
});