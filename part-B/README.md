
---

# 📄 Database Schema Overview

The system is designed around a simple inventory search use case where multiple suppliers list their products and users can filter/search them.

### Collections / Tables

#### 1. **Suppliers**

* `supplierId` (Primary Key)
* `name`
* `location`
* `contact`

**Purpose:**
Stores information about inventory providers. This helps in grouping and filtering inventory supplier-wise.

---

#### 2. **Inventory**

- `itemId` (Primary Key)
- `name`
- `category`
- `price`
- `quantity`
- `supplierId` (Reference to Supplier)

**Purpose:**
Core entity of the system. Each record represents a product available in stock.

---

### 🔗 Relationship

- One **supplier → many inventory items**
- Implemented using `supplierId` as a reference

---

## ⚖️ Why I Chose NoSQL (MongoDB)

I chose a NoSQL database (MongoDB) for the following practical reasons:

### 1. Flexible Schema

Inventory data can evolve. MongoDB allow schema changes without migrations.

### 2. JSON-like Structure

### 2. No Complex Joins Required

This project doesn’t need heavy relational queries.
Simple referencing (`supplierId`) is enough.

---

### ❗ Trade-off (Important for interviews)

- MongoDB is not ideal if:
  - Strong ACID guarantees across multiple tables are required
  - Complex joins and relational constraints dominate the system

In such cases, SQL (like PostgreSQL/MySQL) would be a better fit.

---

## 🚀 Indexing / Optimization Strategy

### ✅ Suggested Index

```js
db.inventory.createIndex({
  name: "text",
  category: 1,
  price: 1,
});
```

### 💡 Why this helps

- **Text index on `name`** → Enables fast keyword search
- **Index on `category`** → Speeds up category filtering
- **Index on `price`** → Optimizes range queries (min/max price)
---
