
## 🔍 Search Logic Explanation

The search feature is implemented using query-based filtering on the Products.

### How it works:

1. Extract query parameters:

   * `q` → search keyword
   * `category` → category filter
   * `minPrice`, `maxPrice` → price range

2. Normalize input:

   * Convert `q` and `category` to lowercase for case-insensitive comparison
   * Trim extra spaces

3. Apply filtering conditions:

   * **Name search** → checks if product name includes the keyword
   * **Category match** → exact match after normalization
   * **Price filtering** → ensures product price falls within range

4. Return only matching products using `.filter()`

### Key Design Choice:

All filters are applied in a **single pass**, which keeps the logic efficient and easy to maintain.

---

## 🚀 Performance Improvement (Large Datasets)

### ❗ Current Limitation:

This approach filters data **in memory**, which becomes inefficient as dataset size grows (high memory usage + slower response time).

---

### ✅ Suggested Improvement: Move Filtering to Database

Instead of filtering in JavaScript, push filtering logic to MongoDB:

```js
{
  name: { $regex: q, $options: "i" },
  category: category,
  price: { $gte: minPrice, $lte: maxPrice }
}
```

### 💡 Why this is better:

* Database handles filtering using indexes
* Reduces data transfer from DB → server
* Improves scalability significantly

---
