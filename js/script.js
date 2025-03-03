// Interaction simple : message de confirmation pour le formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci de m’avoir contacté ! Je vous répondrai bientôt.');
});