// src/main.ts

import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { Product } from './models/Product';

// Create an array of products of different types
const inventory: Product[] = [
  new PhysicalProduct('PH001', 'Wireless Headphones', 120.00, 0.5),
  new DigitalProduct('DG001', 'E-Book: Learn TypeScript', 19.99, 15),
  new PhysicalProduct('PH002', 'Smartphone', 699.00, 0.4),
  new DigitalProduct('DG002', 'Software License', 249.00, 0.1)
];
// Loop through each product and apply a discount if applicable
inventory.forEach(product => {
  // Apply a 10% discount to physical products only
  if ('applyDiscount' in product) {
    (product as any).applyDiscount(10); // quick and safe cast
  }
});

// Loop through each product, display details and price including tax
inventory.forEach(product => {
  console.log(product.displayDetails());
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}\n`);
});
