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


