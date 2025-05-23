import { sortProducts } from './utils/sortProducts';

// Sort by name ascending (A–Z)
const sortedInventory = sortProducts(inventory, 'name', 'asc');

// Optional: Sort by price descending
// const sortedInventory = sortProducts(inventory, 'price', 'desc');

sortedInventory.forEach((product: Product) => {
  if ('applyDiscount' in product) {
    console.log(`Applying discount to: ${product.name}`);
    (product as any).applyDiscount(10);
  }

  console.log(product.displayDetails());
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}\n`);
});
