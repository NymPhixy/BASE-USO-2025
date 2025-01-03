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