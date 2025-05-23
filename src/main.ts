import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { Product } from './models/Product';
import { calculateTax } from './utils/taxCalculator';
import { sortProducts } from './utils/sortProducts';

// Define the original unsorted inventory
const inventory: Product[] = [
  new PhysicalProduct('PH001', 'Wireless Headphones', 120.00, 0.5),
  new DigitalProduct('DG001', 'E-Book: Learn TypeScript', 19.99, 15),
  new PhysicalProduct('PH002', 'Smartphone', 699.00, 0.4),
  new DigitalProduct('DG002', 'Software License', 249.00, 0.1)
];

// Sort the products by name in ascending order (alphabetical)
const sortedInventory = sortProducts(inventory, 'name', 'asc');

// Loop through each product, apply discount if applicable, and display details
sortedInventory.forEach((product: Product) => {
  if ('applyDiscount' in product) {
    console.log(`Applying discount to: ${product.name}`);
    (product as any).applyDiscount(10);
  }

  console.log(product.displayDetails());
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}\n`);
});
// This code demonstrates how to use the Product, PhysicalProduct, and DigitalProduct classes.
// It creates an inventory of products, sorts them, applies discounts, and displays their details.  