// src/index.ts

interface Product {
  sku: string;
  name: string;
  price: number;
  type: 'Physical' | 'Digital';
}

const inventory: Product[] = [
  { sku: 'PH001', name: 'Wireless Headphones', price: 120.0, type: 'Physical' },
  { sku: 'DG001', name: 'E-Book: Learn TypeScript', price: 19.99, type: 'Digital' },
  { sku: 'PH002', name: 'Smartphone', price: 699.0, type: 'Physical' },
  { sku: 'DG002', name: 'Software License', price: 249.0, type: 'Digital' }
];

// Track whether we’re showing detailed view or simple list
let showDetailed = false;

// Logic to apply tax and discount
function calculatePriceWithTax(product: Product): number {
  const discountRate = 0.1;
  const taxRate = product.type === 'Physical' ? 0.1 : 0;
  const discounted = product.price * (1 - discountRate);
  return discounted + discounted * taxRate;
}

// Reusable render logic
function renderInventory(data: Product[]) {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  if (!showDetailed) {
    // Simple list view
    const list = document.createElement('ul');
    data.forEach((product) => {
      const finalPrice = calculatePriceWithTax(product).toFixed(2);
      const item = document.createElement('li');
      item.textContent = `${product.name} (${product.type}) — $${product.price.toFixed(2)} → Final: $${finalPrice}`;
      list.appendChild(item);
    });
    app.appendChild(list);
  } else {
    // Detailed table view
    const table = document.createElement('table');
    table.border = '1';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '1rem';

    table.innerHTML = `
      <thead>
        <tr>
          <th>SKU</th><th>Name</th><th>Type</th>
          <th>Price</th><th>Discount</th><th>Tax</th><th>Final</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((p) => {
          const discount = p.price * 0.1;
          const afterDiscount = p.price - discount;
          const tax = p.type === 'Physical' ? afterDiscount * 0.1 : 0;
          const total = afterDiscount + tax;
          return `
            <tr>
              <td>${p.sku}</td>
              <td>${p.name}</td>
              <td>${p.type}</td>
              <td>$${p.price.toFixed(2)}</td>
              <td>$${discount.toFixed(2)}</td>
              <td>$${tax.toFixed(2)}</td>
              <td><strong>$${total.toFixed(2)}</strong></td>
            </tr>
          `;
        }).join('')}
      </tbody>
    `;
    app.appendChild(table);
  }
}

// Default view
renderInventory(inventory);

// Sorting
document.getElementById('sortName')?.addEventListener('click', () => {
  const sorted = [...inventory].sort((a, b) => a.name.localeCompare(b.name));
  renderInventory(sorted);
});

document.getElementById('sortPrice')?.addEventListener('click', () => {
  const sorted = [...inventory].sort((a, b) => a.price - b.price);
  renderInventory(sorted);
});

// Form submission
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

// Toggle view mode
document.getElementById('toggleView')?.addEventListener('click', () => {
  showDetailed = !showDetailed;
  const button = document.getElementById('toggleView')!;
  button.textContent = showDetailed ? 'Show Simple View' : 'Show Details';
  renderInventory(inventory);
});
