class ShoppingCart {
  constructor(container) {
    this.container = container;
    this.items = [];
    this.render();
  }

  addItem(item) {
    this.items.push(item);
    this.render();
  }

  removeItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.render();
    }
  }

  get total() {
    // Calculate the total based on the items in the cart
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  render() {
    this.container.innerHTML = `
      <div>!! --Shopping Cart Component-- !!</div>
      <ul>
        ${this.items.map(item => `<li>${item.name} - $${item.price}</li>`).join('')}
      </ul>
      <div>Total: $${this.total}</div>
    `;
  }
}
