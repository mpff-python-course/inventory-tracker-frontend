// src/models/PhysicalProduct.ts

import { Product } from './Product';

// The PhysicalProduct class represents tangible goods (e.g., electronics, apparel).
// It extends the Product base class and adds a weight property.

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number  // Weight in kilograms (stored privately)
  ) {
    super(sku, name, price); // Calls the parent constructor
  }

  // Returns the weight as a formatted string (e.g., "2.5 kg")
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // Calculates final price including 10% tax for physical items
  getPriceWithTax(): number {
    const taxRate = 0.1;
    return this.price + this.price * taxRate;
  }

  // Optionally override displayDetails to include weight
  displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
  }
}
