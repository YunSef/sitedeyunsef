const message =
  "Merci d'avoir essayer de m'envoyer un message! Ca ne marche pas encore mais ça ne saurait tarder!^^";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
