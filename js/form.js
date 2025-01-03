document.addEventListener("DOMContentLoaded", function () {
    const heroContentContainer = document.getElementById("hero-content-container");
    const aanmeldFormulier = document.getElementById("aanmeld-formulier");
    const heroButton = document.querySelector(".hero-button");
    const resetButton = aanmeldFormulier.querySelector("input[type='reset']");
  
    // Hide the form by default
    aanmeldFormulier.style.display = "none";
  
    heroButton.addEventListener("click", function (event) {
      event.preventDefault();
      heroContentContainer.style.display = "none";
      aanmeldFormulier.style.display = "block";
    });
  
    resetButton.addEventListener("click", function (event) {
      event.preventDefault();
      aanmeldFormulier.style.display = "none";
      heroContentContainer.style.display = "block";
    });
  });