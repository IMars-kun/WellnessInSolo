// Form
const form = document.querySelector(".form");

function displayForm() {
    form.classList.toggle("active");
    document.getElementById("form").scrollIntoView({
        behavior: "smooth", // Animasi smooth scrolling
    });
}

// Back Button
const back = document.getElementById("back");
back.onclick = () => {
    window.location.href = "index.html";
};

