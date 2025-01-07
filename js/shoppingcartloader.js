document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
  
    // Add click event listeners to all 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
  
        // Add item to cart
        const listItem = document.createElement('li');
        listItem.textContent = `${name} - $${price}`;
        cartItems.appendChild(listItem);
  
        // Update total
        total += price;
        cartTotal.textContent = total.toFixed(2);
      });
    });
  });