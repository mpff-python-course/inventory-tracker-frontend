"use strict";
// src/models/DigitalProduct.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
// DigitalProduct models intangible goods like e-books or licenses.
// These products are not taxed and include a file size attribute.
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize // File size in megabytes (MB)
    ) {
        super(sku, name, price); // Inherit from Product
        this.fileSize = fileSize;
    }
    // Returns the file size as a formatted string (e.g., "500 MB")
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    // No tax applied to digital products
    getPriceWithTax() {
        return this.price;
    }
    // Override to include file size in the product details
    displayDetails() {
        return `${super.displayDetails()}, File Size: ${this.formattedFileSize}`;
    }
}
exports.DigitalProduct = DigitalProduct;
