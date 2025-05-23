// src/utils/sortProducts.ts

import { Product } from '../models/Product';

// This function sorts an array of Product objects
// - by: property to sort ('name' or 'price')
// - order: direction ('asc' or 'desc')
export function sortProducts(
  products: Product[],
  by: 'name' | 'price',
  order: 'asc' | 'desc' = 'asc'
): Product[] {
  return products.sort((a, b) => {
    let valueA = a[by];
    let valueB = b[by];

    if (typeof valueA === 'string') {
      // Sort names alphabetically
      const comparison = (valueA as string).localeCompare(valueB as string);
      return order === 'asc' ? comparison : -comparison;
    } else if (typeof valueA === 'number') {
      // Sort prices numerically
      return order === 'asc' ? valueA - (valueB as number) : (valueB as number) - valueA;
    }

    return 0;
  });
}
