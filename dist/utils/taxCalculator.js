"use strict";
// src/utils/taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// This utility function calculates and returns the final price of a product,
// relying on polymorphism — it doesn't care if it's a physical or digital product.
function calculateTax(product) {
    return product.getPriceWithTax();
}
