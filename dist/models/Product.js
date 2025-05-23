"use strict";
// src/models/Product.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// The Product class is an abstract blueprint for all products in our inventory system.
// It defines common properties and methods shared by all product types.
class Product {
    constructor(sku, // Unique identifier for the product
    name, // Human-readable name of the product
    price // Base price of the product before tax
    ) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    // displayDetails returns a string with formatted product details
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
