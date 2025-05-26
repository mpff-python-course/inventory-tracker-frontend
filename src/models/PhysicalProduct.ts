import { Product } from './Product';
import { DiscountableProduct } from './DiscountableProduct';

// Represents a tangible product with weight.
// Implements DiscountableProduct so we can apply percentage discounts.
export class PhysicalProduct extends Product implements DiscountableProduct {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  // Returns formatted weight like "2.5 kg"
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  // Automatically apply a 10% discount if the product is heavy
  getPriceWithTax(): number {
    const basePrice = this.weight > 1 ? this.price * 0.9 : this.price; // 10% off if > 1kg
    const taxRate = 0.1;
    return basePrice + basePrice * taxRate;
  }

  // Standard product details including weight
  displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
  }

  // Manual discount (interface method)
  applyDiscount(percentage: number): void {
    this.price = this.price * (1 - percentage / 100);
  }
}
