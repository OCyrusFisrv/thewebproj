class Menu {
  constructor(container) {
    this.container = container;
    this.fetchMenuData();
  }

  async fetchMenuData() {
    try {
      const response = await fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1/menu');
      const jsonData = await response.json();
      this.render(jsonData);
    } catch (error) {
      console.error('Error fetching menu data:', error);
      this.render(null);
    }
  }

  render(menuData) {
    if (menuData && menuData.categories) {
      this.container.innerHTML = '';
      const categories = menuData.categories;
      for (const categoryId in categories) {
        const category = categories[categoryId];
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('menu-category');
        categoryElement.innerHTML = `<h2>${category.name}</h2>`;
        this.container.appendChild(categoryElement);

        if (category.items && Array.isArray(category.items)) {
          const table = document.createElement('table');
          table.classList.add('menu-table');
          const items = category.items;
          for (let i = 0; i < items.length; i += 2) {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            if (items[i]) {
              cell1.innerHTML = this.renderItemHTML(items[i]);
            }
            if (items[i + 1]) {
              cell2.innerHTML = this.renderItemHTML(items[i + 1]);
            }
          }
          this.container.appendChild(table);
        } else {
          console.error('Invalid category structure:', category);
        }
      }
    } else {
      this.container.innerHTML = '<p>Error fetching or invalid menu data</p>';
    }
  }

  renderItemHTML(item) {
    return `
      <div class="menu-item">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Price: ${item.price}</p>
        <button class="add-to-cart" data-item-id="${item.id}">Add to Cart</button>
      </div>
    `;
  }
}  

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');
  if (!menuContainer) {
    console.error('Menu container not found');
    return;
  }

  new Menu(menuContainer);
});
