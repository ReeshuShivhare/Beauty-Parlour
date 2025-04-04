// alert("Experience the Art of Beauty – Where Elegance Meets Perfection!");
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});


function scrollToContact() {
    let alertBox = document.getElementById("customAlert");
    alertBox.style.display = "flex"; // Show alert first

    // Automatically close after 3 seconds
    setTimeout(() => {
        closeAlert();
    }, 1000);
}

// Close alert, scroll to Contact section, and add highlight effect
function closeAlert() {
    let alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";

    let contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });

    // Add highlight effect
    contactSection.classList.add("highlight-effect");

    // Remove effect after 3 seconds
    setTimeout(() => {
        contactSection.classList.remove("highlight-effect");
    }, 1000);
}
