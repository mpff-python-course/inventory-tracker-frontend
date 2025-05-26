import { Product } from './models/Product';
import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { sortProducts } from './utils/sortProducts';

// Define the full inventory of products
const inventory: Product[] = [
  new PhysicalProduct('PH001', 'Wireless Headphones', 120.00, 0.5),
  new DigitalProduct('DG001', 'E-Book: Learn TypeScript', 19.99, 15),
  new PhysicalProduct('PH002', 'Smartphone', 699.00, 0.4),
  new DigitalProduct('DG002', 'Software License', 249.00, 0.1),
  new PhysicalProduct('PH003', 'Heavy Duty Generator', 500.00, 2.5) // Triggers bulk discount
];

// Sort the inventory by product name in ascending (A–Z) order
const sortedInventory = sortProducts(inventory, 'name', 'asc');

// Loop through each product, apply discount if available, then display full info
sortedInventory.forEach((product: Product) => {
  if ('applyDiscount' in product) {
    console.log(`Applying manual discount to: ${product.name}`);
    (product as any).applyDiscount(10); // Manual discount for eligible items
  }

  // Display product details and price including tax
  console.log(product.displayDetails());
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}\n`);
});
