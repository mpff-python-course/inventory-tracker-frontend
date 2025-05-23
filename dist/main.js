"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const sortProducts_1 = require("./utils/sortProducts");
// Define the original unsorted inventory
const inventory = [
    new PhysicalProduct_1.PhysicalProduct('PH001', 'Wireless Headphones', 120.00, 0.5),
    new DigitalProduct_1.DigitalProduct('DG001', 'E-Book: Learn TypeScript', 19.99, 15),
    new PhysicalProduct_1.PhysicalProduct('PH002', 'Smartphone', 699.00, 0.4),
    new DigitalProduct_1.DigitalProduct('DG002', 'Software License', 249.00, 0.1)
];
// Sort the products by name in ascending order (alphabetical)
const sortedInventory = (0, sortProducts_1.sortProducts)(inventory, 'name', 'asc');
// Loop through each product, apply discount if applicable, and display details
sortedInventory.forEach((product) => {
    if ('applyDiscount' in product) {
        console.log(`Applying discount to: ${product.name}`);
        product.applyDiscount(10);
    }
    console.log(product.displayDetails());
    console.log(`Price with Tax: $${(0, taxCalculator_1.calculateTax)(product).toFixed(2)}\n`);
});
// This code demonstrates how to use the Product, PhysicalProduct, and DigitalProduct classes.
// It creates an inventory of products, sorts them, applies discounts, and displays their details.  
