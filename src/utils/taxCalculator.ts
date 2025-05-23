// src/utils/taxCalculator.ts

import { Product } from '../models/Product';

// This utility function calculates and returns the final price of a product,
// relying on polymorphism — it doesn't care if it's a physical or digital product.

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
