// Toggle navigation menu (mobile)
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
}

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Lightbox (simple modal for images)
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

document.querySelectorAll("#projects img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const imgClone = document.createElement("img");
        imgClone.src = img.src;

        lightbox.innerHTML = "";
        lightbox.appendChild(imgClone);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Contact Form Validation
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
    let valid = true;

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        valid = false;
    }

    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email");
        valid = false;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter a message");
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});