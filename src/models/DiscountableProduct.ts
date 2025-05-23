// src/models/DiscountableProduct.ts

// An interface for products that support discounting
export interface DiscountableProduct {
  applyDiscount(percentage: number): void;
}
