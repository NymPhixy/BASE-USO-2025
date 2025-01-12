// Function to update the cart counter
function updateCartCounter() {
    const capaAmount = document.querySelector(".capa-amount p"); // Select the counter element
  
    if (!capaAmount) {
      console.error("capa-amount element not found");
      return;
    }
  
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Calculate the total quantity of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
    // Update the counter with the total items
    capaAmount.textContent = totalItems;
  }
  
  // Automatically update the counter on page load
  document.addEventListener("DOMContentLoaded", updateCartCounter);