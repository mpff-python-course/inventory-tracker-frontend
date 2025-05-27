// src/index.ts

// Step 1: Define a product interface for the UI logic
interface Product {
  sku: string;
  name: string;
  price: number;
  type: 'Physical' | 'Digital';
}

// Step 2: Create a sample inventory array (mock data for demo)
const inventory: Product[] = [
  { sku: 'PH001', name: 'Wireless Headphones', price: 120.0, type: 'Physical' },
  { sku: 'DG001', name: 'E-Book: Learn TypeScript', price: 19.99, type: 'Digital' },
  { sku: 'PH002', name: 'Smartphone', price: 699.0, type: 'Physical' },
  { sku: 'DG002', name: 'Software License', price: 249.0, type: 'Digital' }
];

// Step 3: Simulate backend discount and tax calculation logic
function calculatePriceWithTax(product: Product): number {
  const taxRate = product.type === 'Physical' ? 0.1 : 0;       // 10% tax for physical
  const discountRate = 0.1;                                     // Simulate 10% discount for all
  const discountedPrice = product.price * (1 - discountRate);   // Apply discount
  return discountedPrice + discountedPrice * taxRate;           // Return final price after tax
}

// Step 4: Get the root element to inject our product list
const app = document.getElementById('app');

if (app) {
  const list = document.createElement('ul');

  // Step 5: Loop over inventory and display details
  inventory.forEach((product) => {
    const finalPrice = calculatePriceWithTax(product).toFixed(2);

    const item = document.createElement('li');
    item.textContent = `${product.name} (${product.type}) — $${product.price.toFixed(2)} → Final: $${finalPrice}`;
    list.appendChild(item);
  });

  // Step 6: Attach the product list to the DOM
  app.appendChild(list);
}
