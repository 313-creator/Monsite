// Défilement fluide pour les liens du menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Supprime le '#' du href
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Mise en surbrillance du lien actif
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Ajuste selon la hauteur du header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});

// Effet d'apparition au défilement des sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// Validation du formulaire avec feedback
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback') || document.createElement("div");

    if (!feedback.id) {
        feedback.id = "feedback";
        this.appendChild(feedback);
    }

    if (name === "" || email === "" || message === "") {
        feedback.style.color = "red";
        feedback.textContent = "Tous les champs doivent être remplis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        feedback.style.color = "red";
        feedback.textContent = "Veuillez entrer une adresse email valide.";
    } else {
        feedback.style.color = "green";
        feedback.textContent = "Formulaire envoyé avec succès !";
        this.reset();
    }
});
/* Style pour le nom dans la barre d'accueil */
.nom {
    font-size: 2.5rem; /* Taille du texte en gros caractères */
    color: lightblue; /* Couleur bleu clair */
    text-align: center; /* Centrer le texte */
    margin-top: 10px; /* Un peu d'espace au-dessus du nom */
    font-weight: bold; /* Mettre le texte en gras */
}

/* Réinitialisation de la barre de navigation pour éviter les interférences */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    color: white;
    padding: 1rem 2rem;
}
