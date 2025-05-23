// src/models/DigitalProduct.ts

import { Product } from './Product';

// DigitalProduct models intangible goods like e-books or licenses.
// These products are not taxed and include a file size attribute.

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number // File size in megabytes (MB)
  ) {
    super(sku, name, price); // Inherit from Product
  }

  // Returns the file size as a formatted string (e.g., "500 MB")
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  // No tax applied to digital products
  getPriceWithTax(): number {
    return this.price;
  }

  // Override to include file size in the product details
  displayDetails(): string {
    return `${super.displayDetails()}, File Size: ${this.formattedFileSize}`;
  }
}
