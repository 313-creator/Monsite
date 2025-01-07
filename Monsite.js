// Monsite.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis.");
    } else {
        alert("Formulaire envoyé !");
        // Logique pour envoyer le formulaire via AJAX ou rediriger vers une page de confirmation
    }
});
