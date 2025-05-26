# 🧩 Challenge 3 Recap: Bulk Discounts for Physical Products

This tutorial summarizes how we implemented automatic bulk discount logic for physical products based on their weight in a TypeScript + OOP inventory system.

---

## ✅ Goal

Apply an automatic **10% discount** to any `PhysicalProduct` if its weight exceeds **1 kilogram**.

---

## 🧱 Step-by-Step Implementation

### 1. Update `PhysicalProduct` Class

**File**: `src/models/PhysicalProduct.ts`

- Added weight threshold check in `getPriceWithTax()`:
```ts
const basePrice = this.weight > 1 ? this.price * 0.9 : this.price;
```
- Returned tax based on discounted price:
```ts
return basePrice + basePrice * 0.1;
```

- Educational comments added to explain logic.

---

### 2. Test with a Heavy Product

**File**: `src/main.ts`

- Added this product to the `inventory` array:
```ts
new PhysicalProduct('PH003', 'Heavy Duty Generator', 500.00, 2.5)
```
- Its weight triggers the discount automatically.

---

### 3. Run and Verify

Compile and run:

```bash
npx tsc
node dist/main.js
```

### ✅ Expected Output

The `Heavy Duty Generator` shows:

- Base price after discount: `$450.00`
- Taxed price: `$495.00`
- Printed with all other products sorted and discounted accordingly.

---

## 💡 Concepts Reinforced

- **Conditional logic** within OOP methods
- **Encapsulation** of discount rules inside a class
- **Real-world modeling** of business rules (e.g., bulk discount)
- **Reusable and clean design** via class inheritance

---

## 📦 Final Note

This feature completes the lab's optional challenge set and enhances the inventory tracker with real-world functionality!