
document.addEventListener("DOMContentLoaded", function () {
const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
const searchText = searchInput.value.toLowerCase();

items.forEach(item => {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchText)) {
        item.style.display = "block"; // Show matching item
    } else {
        item.style.display = "none"; // Hide non-matching item
    }
});
});
});

function openProductPage(image) {
window.location.href = `product.html?image=${image}`;
}

document.addEventListener("DOMContentLoaded", function () {
const themeSelector = document.getElementById("themeSelector");
const body = document.body;

// Set default theme to light
body.classList.add("light-mode");
themeSelector.value = "light";

themeSelector.addEventListener("change", function () {
    if (this.value === "dark") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
    document.getElementById("settings").style.display = "none";
});
});

function toggleSettings() {
const settingsContainer = document.getElementById("settings");
settingsContainer.style.display = settingsContainer.style.display === "block" ? "none" : "block";
}


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide,2000); // Change slide every 2 seconds
}

showSlide(slideIndex);
setTimeout(autoSlide, 2000);


