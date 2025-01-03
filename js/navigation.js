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

function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      smoothScroll(target);
    });
  });
});