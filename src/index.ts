// src/index.ts

// Step 1: Define a product interface for browser-side use
interface Product {
  sku: string;
  name: string;
  price: number;
  type: 'Physical' | 'Digital';
}

// Step 2: Sample inventory array to simulate our backend
const inventory: Product[] = [
  { sku: 'PH001', name: 'Wireless Headphones', price: 120.0, type: 'Physical' },
  { sku: 'DG001', name: 'E-Book: Learn TypeScript', price: 19.99, type: 'Digital' },
  { sku: 'PH002', name: 'Smartphone', price: 699.0, type: 'Physical' },
  { sku: 'DG002', name: 'Software License', price: 249.0, type: 'Digital' }
];

// Step 3: Get the app container
const app = document.getElementById('app');

// Step 4: Render the inventory to the page
if (app) {
  const list = document.createElement('ul');

  inventory.forEach((product) => {
    const item = document.createElement('li');
    item.textContent = `${product.name} (${product.type}) — $${product.price.toFixed(2)}`;
    list.appendChild(item);
  });

  app.appendChild(list);
}
