# 🧮 Inventory Tracker Prototype (TypeScript OOP Lab)

A simple inventory management prototype built in **TypeScript** using **object-oriented programming** principles.

---

## 📦 Features

- Models **Physical** and **Digital** products.
- Applies appropriate **tax rules** per product type.
- Demonstrates **abstraction, inheritance, encapsulation, and polymorphism**.
- Modular code structure for scalability and maintenance.

---

## 📁 Folder Structure

inventory-tracker/
├── src/
│ ├── models/
│ │ ├── Product.ts # Abstract base class
│ │ ├── PhysicalProduct.ts # Subclass for physical goods
│ │ └── DigitalProduct.ts # Subclass for digital goods
│ ├── utils/
│ │ └── taxCalculator.ts # Polymorphic tax function
│ └── main.ts # Entry point
├── dist/ # Compiled JS output
├── package.json
├── tsconfig.json
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/inventory-tracker.git
cd inventory-tracker
2. Install dependencies
bash
Copy
Edit
npm install
3. Compile the code
bash
Copy
Edit
npx tsc
4. Run the app
bash
Copy
Edit
node dist/main.js
💡 Concepts Demonstrated
TypeScript Type Annotations

Abstract Classes & Methods

Inheritance and Method Overriding

Encapsulation with Private Properties

Polymorphism in Tax Calculation

🧪 Example Output
yaml
Copy
Edit
SKU: PH001, Name: Wireless Headphones, Price: $120.00, Weight: 0.5 kg
Price with Tax: $132.00

SKU: DG001, Name: E-Book: Learn TypeScript, Price: $19.99, File Size: 15 MB
Price with Tax: $19.99
📚 License
Educational use only – built as part of a lab exercise for learning TypeScript OOP.

✍️ Author
Created by [Your Name], 2025

yaml
Copy
Edit

> ✏️ Replace **`YOUR_USERNAME`** and **`[Your Name]`** with your GitHub username and your actual name.

---

### ✅ GitHub Step: Final Commit

```bash
git add README.md
git commit -m "Add README with full project documentation"
git push