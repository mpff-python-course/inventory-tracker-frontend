// src/models/Product.ts

// The Product class is an abstract blueprint for all products in our inventory system.
// It defines common properties and methods shared by all product types.

export abstract class Product {
  constructor(
    public sku: string,   // Unique identifier for the product
    public name: string,  // Human-readable name of the product
    public price: number  // Base price of the product before tax
  ) {}

  // displayDetails returns a string with formatted product details
  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  // getPriceWithTax is declared abstract, meaning each subclass must provide its own implementation
  abstract getPriceWithTax(): number;
}
