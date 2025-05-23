# 🧠 Concept & Logic Behind the Inventory Tracker Lab

## 🎯 Objective
This lab teaches how to use **TypeScript with Object-Oriented Programming (OOP)** to build a system that models different types of products, applies tax rules, and manages inventory.

---

## 🧱 Core Concepts

### 1. Object-Oriented Programming (OOP)
- **Class**: A blueprint for creating objects.
- **Inheritance**: Allows one class to use the properties and methods of another.
- **Encapsulation**: Keeps data safe inside an object, exposing only what's necessary.
- **Polymorphism**: Allows different classes to define their own versions of the same method.

### 2. TypeScript Features
- **Type Annotations**: Makes the code safer and easier to understand.
- **Abstract Classes & Interfaces**: Help define a standard structure for other classes.

---

## 🧩 How the Program Works

### 1. Base Class `Product`
- Common to all products.
- Defines shared attributes like `name`, `price`, and a placeholder for tax calculation.

### 2. Subclasses
- `PhysicalProduct` adds a `weight` and applies **10% tax**.
- `DigitalProduct` adds a `fileSize` and applies **no tax**.

### 3. Tax Calculator Function
- Accepts any `Product` and calls the correct `getPriceWithTax()` automatically using polymorphism.

### 4. Main Program
- Creates both physical and digital products.
- Loops through them to display details and compute final prices using the utility function.

---

## 🛠️ Why This Matters
- Shows how to write modular, reusable code.
- Encourages thinking in terms of real-world objects (products).
- Prepares you for building scalable applications in professional environments.