# 🧮 Inventory Tracker Prototype - TypeScript OOP Lab Tutorial

This tutorial walks you step-by-step through building a simple inventory management system using **TypeScript** and **Object-Oriented Programming**.

---

## ✅ Step 1: Project Setup

```bash
mkdir inventory-tracker
cd inventory-tracker
npm init -y
```

---

## ✅ Step 2: Install TypeScript

```bash
npm install typescript @types/node --save-dev
npx tsc --init
```

Modify `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

---

## ✅ Step 3: Create Folder Structure

```bash
mkdir -p src/models
mkdir -p src/utils
touch src/models/Product.ts
touch src/models/PhysicalProduct.ts
touch src/models/DigitalProduct.ts
touch src/utils/taxCalculator.ts
touch src/main.ts
```

---

## ✅ Step 4: Product Base Class

`src/models/Product.ts`:

```ts
export abstract class Product {
  constructor(public sku: string, public name: string, public price: number) {}

  displayDetails(): string {
    return \`SKU: \${this.sku}, Name: \${this.name}, Price: $\${this.price.toFixed(2)}\`;
  }

  abstract getPriceWithTax(): number;
}
```

---

## ✅ Step 5: PhysicalProduct Subclass

`src/models/PhysicalProduct.ts`:

```ts
import { Product } from './Product';

export class PhysicalProduct extends Product {
  constructor(sku: string, name: string, price: number, private weight: number) {
    super(sku, name, price);
  }

  get formattedWeight(): string {
    return \`\${this.weight} kg\`;
  }

  getPriceWithTax(): number {
    return this.price + this.price * 0.1;
  }

  displayDetails(): string {
    return \`\${super.displayDetails()}, Weight: \${this.formattedWeight}\`;
  }
}
```

---

## ✅ Step 6: DigitalProduct Subclass

`src/models/DigitalProduct.ts`:

```ts
import { Product } from './Product';

export class DigitalProduct extends Product {
  constructor(sku: string, name: string, price: number, private fileSize: number) {
    super(sku, name, price);
  }

  get formattedFileSize(): string {
    return \`\${this.fileSize} MB\`;
  }

  getPriceWithTax(): number {
    return this.price;
  }

  displayDetails(): string {
    return \`\${super.displayDetails()}, File Size: \${this.formattedFileSize}\`;
  }
}
```

---

## ✅ Step 7: Tax Calculator Utility

`src/utils/taxCalculator.ts`:

```ts
import { Product } from '../models/Product';

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
```

---

## ✅ Step 8: Main Program

`src/main.ts`:

```ts
import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { Product } from './models/Product';

const inventory: Product[] = [
  new PhysicalProduct('PH001', 'Wireless Headphones', 120.00, 0.5),
  new DigitalProduct('DG001', 'E-Book: Learn TypeScript', 19.99, 15),
  new PhysicalProduct('PH002', 'Smartphone', 699.00, 0.4),
  new DigitalProduct('DG002', 'Software License', 249.00, 0.1)
];

inventory.forEach(product => {
  console.log(product.displayDetails());
  console.log(\`Price with Tax: $\${calculateTax(product).toFixed(2)}\n\`);
});
```

---

## ✅ Step 9: Compile and Run

```bash
npx tsc
node dist/main.js
```

---

## ✅ Step 10: Add README

Create a `README.md` with project details (see earlier).

---

Happy Coding! 🎉