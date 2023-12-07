class AppHeader {
  constructor(container) {
    this.container = container;
    this.render();
    this.setupCart();
  }

  render() {
    this.container.innerHTML = `
      <div class="header-content">
        <img src="img/clover-logo.svg" alt="Clover Logo" class="logo">
        <div class="title"></div>
        <button class="cart-button">
          <img src="img/cart-icon.svg" alt="Cart Icon" class="cart-icon">
        </button>
      </div>
      <div class="sidebar hidden">
        <h3>Cart</h3>
        <ul class="cart-items">
          <!-- Display cart items here -->
        </ul>
        <button class="checkout-button">Checkout</button>
      </div>
    `;

    // Apply styles to the header
    // ... (existing styles)

    // Apply styles to the logo
    // ... (existing styles)

    // Apply styles to the cart icon
    // ... (existing styles)
  }

  setupCart() {
    const cartButton = this.container.querySelector('.cart-button');
    const sidebar = this.container.querySelector('.sidebar');

    cartButton.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });

    // Initially hide the sidebar
    sidebar.classList.add('hidden');

    // Mock cart items for demonstration
    const cartItems = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 15 },
      { id: 3, name: 'Item 3', price: 20 }
    ];

    const cartItemsList = sidebar.querySelector('.cart-items');
    cartItemsList.innerHTML = cartItems.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
  }
}
