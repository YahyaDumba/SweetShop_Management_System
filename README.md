# Sweet Shop Management System

A simple inventory system for managing sweets   
Built using JavaScript and Jest with Test-Driven Development (TDD) principles.
( I have also added THE JOURNEY at the end of How much erros Did I solved and how the Final Result looks like. )

# Features

- ✅ Add, View, Delete sweets
- 🔍 Search by Name, Category, Price Range
- 🛒 Purchase (reduce stock)
- 📦 Restock (increase stock)
- ✅ Fully tested using Jest
- 🧼 Clean code with meaningful Git commits

## How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/YahyaDumba/SweetShop_Management_System
   cd SweetShop_Management_System
   npm install
   npm test

2. Structure
SweetShop_Management_System/
├── src/
│   ├── Inventory.js       # Handles add, delete, view, search purchase, restock
│   └── Sweet.js           # Sweet model class
│
├── tests/
│   └── inventory.test.js  # Jest test cases for all features
│
├── README.md              # Documentation
├── package.json           # Project metadata
├── .gitignore             # Git exclusions


# Journey
## 🛠️ Real-World Project Journey (From First Line to Final Push)

This section documents the actual steps I followed to build the **Sweet Shop Management System** using Test-Driven Development (TDD), including mistakes, learnings, and how I solved them.

---

### ✅ 1. Project Setup

- Created a new project folder: `sweetshop/`
- Ran `npm init -y` to initialize a Node.js project
- Tried to install Jest using `npm install --save-dev jest`
- ❌ Faced a **platform error**: `Unsupported platform for inotify@...` (Linux-only module)
- ✅ Solved it by ignoring the warning, as it didn’t affect Windows

---

### 📁 2. Created Basic File Structure

sweetshop/
├── src/
│ ├── Inventory.js
│ └── Sweet.js
├── tests/
│ └── inventory.test.js

---

### 🧪 3. Wrote First Test (TDD starts here!)

- Created `inventory.test.js`
- Wrote the first test: `should add a sweet to the inventory`
- ❌ Faced test failure: `Cannot find module '../src/Inventory'`
- ✅ Realized I hadn’t created `Inventory.js` yet — created it and re-ran tests

---

### 💥 4. Faced Common Mistakes While Testing

- ❌ Forgot to define `Sweet` before using `new Sweet(...)` → **ReferenceError**
- ❌ Named file `puchaseSweet()` instead of `purchaseSweet()` → **TypeError**

✅ Fixed each by carefully reading error logs and updating test + implementation files

---

### 📦 5. Implemented Core Inventory Features with TDD

| Feature | Test Written | Errors Faced | Status |
|--------|--------------|---------------|--------|
| `addSweet()` | ✅ | None | ✅ |
| `deleteSweet()` | ✅ | Wrong ID passed | ✅ |
| `searchByName()` | ✅ | Wrong test expectation (used ID instead of count) | ✅ |
| `searchByCategory()` | ✅ | `undefined.toLowerCase()` error | ✅ |
| `searchByPriceRange()` | ✅ | Expected: ≤25, Received: 30 (wrong logic in test) | ✅ |
| `purchaseSweet()` | ✅ | Misspelled method name | ✅ |
| `restockSweet()` | ✅ | No errors 🎉 | ✅ |

---

### 🧼 6. Full Code Refactor & Polish

- Added meaningful JS Doc-style comments in `Inventory.js` and `Sweet.js`
- Used consistent formatting, spacing, and clean class structures
- Gave clear error messages (like “Sweet not found” and “Insufficient stock”)

---

### ✅ 7. Git Commit Best Practices Followed

- Committed every feature with meaningful messages
- Handled `.gitignore` (ignored `node_modules/`)
- Final commit:  


---

### 📈 Total Bugs/Errors Faced

| Type | Count |
|------|-------|
| Jest syntax/setup errors | 3 |
| ReferenceError / Import | 2 |
| Logic error in tests | 2 |
| Misspelled function names | 1 |
| Platform-specific issue | 1 |

✅ Solved all with reading logs + reasoning + patience

---

### 🏁 Final Status

- ✔️ All 7 features implemented
- ✔️ 100% passing test suite
- ✔️ Clean GitHub repo
- ✔️ Polished README and comments
- ✔️ Project ready for presentation or review


