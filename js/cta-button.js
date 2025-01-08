document.addEventListener("DOMContentLoaded", function() {
  const ctaButtonById = document.getElementById("cta-button");
  if (ctaButtonById) {
    ctaButtonById.addEventListener("click", () => {
      alert("Bedankt voor je interesse! We nemen snel contact met je op.");
    });
  }

  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function() {
      // Your event handler code here
    });
  }
});