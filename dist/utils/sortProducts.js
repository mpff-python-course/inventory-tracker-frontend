"use strict";
// src/utils/sortProducts.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortProducts = sortProducts;
// This function sorts an array of Product objects
// - by: property to sort ('name' or 'price')
// - order: direction ('asc' or 'desc')
function sortProducts(products, by, order = 'asc') {
    return products.sort((a, b) => {
        let valueA = a[by];
        let valueB = b[by];
        if (typeof valueA === 'string') {
            // Sort names alphabetically
            const comparison = valueA.localeCompare(valueB);
            return order === 'asc' ? comparison : -comparison;
        }
        else if (typeof valueA === 'number') {
            // Sort prices numerically
            return order === 'asc' ? valueA - valueB : valueB - valueA;
        }
        return 0;
    });
}
