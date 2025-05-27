# 📘 Inventory Tracker – Feature Branch Tutorial (Frontend: Detailed View Toggle)

This guide is an **appendix** to the full Inventory Tracker project. It focuses on implementing a frontend feature on a new branch: `feature/detailed-view-toggle`, enabling users to toggle between a **simple product list** and a **detailed table view**.

---

## 🌿 Branch Preparation

### ✅ Create and switch to a new feature branch

```bash
git checkout -b feature/detailed-view-toggle
```

### ✅ Commit any in-progress changes

```bash
git add .
git commit -m "Prepare for detailed view toggle feature"
```

---

## 🖼️ UI Requirements

### ✅ Update HTML: Add Toggle Button

Insert this after sorting buttons:

```html
<button id="toggleView">Show Details</button>
```

---

## 🔧 TypeScript Update: `src/index.ts`

### ✅ 1. Track view mode

```ts
let showDetailed = false;
```

### ✅ 2. Extend render function to support both views

* Simple list: as before
* Detailed table: adds SKU, price, discount, tax, total

### ✅ 3. Add toggle logic

```ts
document.getElementById('toggleView')?.addEventListener('click', () => {
  showDetailed = !showDetailed;
  const btn = document.getElementById('toggleView');
  if (btn) btn.textContent = showDetailed ? 'Show Simple View' : 'Show Details';
  renderInventory(inventory);
});
```

---

## 📄 Example of Detailed Table Output

```html
<table>
  <thead>
    <tr>
      <th>SKU</th><th>Name</th><th>Type</th><th>Price</th>
      <th>Discount</th><th>Tax</th><th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PH001</td><td>Wireless Headphones</td><td>Physical</td>
      <td>$120.00</td><td>$12.00</td><td>$10.80</td><td>$118.80</td>
    </tr>
  </tbody>
</table>
```

* This is dynamically generated using DOM or `innerHTML`

---

## ✅ Commit the Feature

```bash
git add src/index.ts public/index.html
git commit -m "Feature: Add toggle between simple and detailed views"
```

## ✅ Push the Branch

```bash
git push --set-upstream origin feature/detailed-view-toggle
```

---

## ✅ Merge to Main (when ready)

```bash
git checkout main
git pull origin main
git merge feature/detailed-view-toggle
git push
```

---

## 💡 Educational Value

* Teaches branching and feature isolation
* Encourages conditional rendering logic
* Practice with DOM manipulation and interactivity

---

This appendix complements the main lab and offers a practical, student-friendly guide to implementing feature-specific UI improvements using Git branches. 🎯
