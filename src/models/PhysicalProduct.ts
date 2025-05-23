// src/models/PhysicalProduct.ts

import { Product } from './Product';
import { DiscountableProduct } from './DiscountableProduct'; // Importing the interface we want to implement

// The PhysicalProduct class represents items you can touch, like gadgets or clothes.
// It extends Product (inherits its properties and methods), and now it also implements
// the DiscountableProduct interface to allow applying discounts.

export class PhysicalProduct extends Product implements DiscountableProduct {
  // The 'weight' is unique to physical products. It's private to encapsulate the data.
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price); // Call the constructor of the base Product class
  }

  // A getter method to return weight in a readable format, like "2.5 kg"
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // Override the base class method to apply a 10% tax
  getPriceWithTax(): number {
    return this.price + this.price * 0.1;
  }

  // Override to show full product details, including weight
  displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
  }

  // This method comes from the DiscountableProduct interface.
  // It allows us to reduce the price by a given percentage.
  // For example, 10% discount means multiplying the price by 0.9
  applyDiscount(percentage: number): void {
    this.price = this.price * (1 - percentage / 100);
  }
}
