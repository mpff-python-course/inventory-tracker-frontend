// src/index.ts

interface Product {
  sku: string;
  name: string;
  price: number;
  type: 'Physical' | 'Digital';
}

// Initial mock data
const inventory: Product[] = [
  { sku: 'PH001', name: 'Wireless Headphones', price: 120.0, type: 'Physical' },
  { sku: 'DG001', name: 'E-Book: Learn TypeScript', price: 19.99, type: 'Digital' },
  { sku: 'PH002', name: 'Smartphone', price: 699.0, type: 'Physical' },
  { sku: 'DG002', name: 'Software License', price: 249.0, type: 'Digital' }
];

// Tax/discount logic
function calculatePriceWithTax(product: Product): number {
  const discountRate = 0.1;
  const taxRate = product.type === 'Physical' ? 0.1 : 0;
  const discounted = product.price * (1 - discountRate);
  return discounted + discounted * taxRate;
}

// Render list to #app
function renderInventory(data: Product[]) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = ''; // clear previous render
  const list = document.createElement('ul');

  data.forEach((product) => {
    const finalPrice = calculatePriceWithTax(product).toFixed(2);
    const item = document.createElement('li');
    item.textContent = `${product.name} (${product.type}) — $${product.price.toFixed(2)} → Final: $${finalPrice}`;
    list.appendChild(item);
  });

  app.appendChild(list);
}

// Initial display
renderInventory(inventory);

// Sort buttons
document.getElementById('sortName')?.addEventListener('click', () => {
  const sorted = [...inventory].sort((a, b) => a.name.localeCompare(b.name));
  renderInventory(sorted);
});

document.getElementById('sortPrice')?.addEventListener('click', () => {
  const sorted = [...inventory].sort((a, b) => a.price - b.price);
  renderInventory(sorted);
});

// Form handling
document.getElementById('productForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const sku = (document.getElementById('sku') as HTMLInputElement).value.trim();
  const name = (document.getElementById('name') as HTMLInputElement).value.trim();
  const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
  const type = (document.getElementById('type') as HTMLSelectElement).value as 'Physical' | 'Digital';

  if (!sku || !name || isNaN(price)) {
    alert('Please fill in all fields correctly.');
    return;
  }

  inventory.push({ sku, name, price, type });
  renderInventory(inventory);
  (document.getElementById('productForm') as HTMLFormElement).reset();
});


