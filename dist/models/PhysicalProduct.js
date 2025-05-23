"use strict";
// src/models/PhysicalProduct.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
// The PhysicalProduct class represents items you can touch, like gadgets or clothes.
// It extends Product (inherits its properties and methods), and now it also implements
// the DiscountableProduct interface to allow applying discounts.
class PhysicalProduct extends Product_1.Product {
    // The 'weight' is unique to physical products. It's private to encapsulate the data.
    constructor(sku, name, price, weight) {
        super(sku, name, price); // Call the constructor of the base Product class
        this.weight = weight;
    }
    // A getter method to return weight in a readable format, like "2.5 kg"
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    // Override the base class method to apply a 10% tax
    getPriceWithTax() {
        return this.price + this.price * 0.1;
    }
    // Override to show full product details, including weight
    displayDetails() {
        return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
    }
    // This method comes from the DiscountableProduct interface.
    // It allows us to reduce the price by a given percentage.
    // For example, 10% discount means multiplying the price by 0.9
    applyDiscount(percentage) {
        this.price = this.price * (1 - percentage / 100);
    }
}
exports.PhysicalProduct = PhysicalProduct;
