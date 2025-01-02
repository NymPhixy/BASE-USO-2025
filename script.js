document.getElementById("cta-button").addEventListener("click", () => {
  alert("Bedankt voor je interesse! We nemen snel contact met je op.");
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after page loads
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  if (loader && mainContent) {
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // Adjust timing as needed
  }
});



// Show loader on navigation
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");
    if (href && href !== "#") {
      event.preventDefault(); // Prevent default behavior
      const loader = document.getElementById("loader");

      if (loader) {
        loader.style.display = "flex";
        setTimeout(() => {
          window.location.href = href; // Navigate after showing loader
        }, 500); // Small delay for loader animation
      }
    }
  });
});

// json fetch languages
  // Fetch the JSON data
  fetch('config/language/language.json')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('country');
    data.countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.value;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching country data:', error));

  // show form
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


