function applyFilter(products, query) {
  const { q, category, minPrice, maxPrice } = query;

  const search = q?.trim().toLowerCase();
  const cat = category?.trim().toLowerCase();

  return products.filter((p) => {
    const name = p.name.toLowerCase();
    const categoryName = p.category.toLowerCase();

    if (search && !name.includes(search)) return false;

    if (cat && categoryName !== cat) return false;

    if (minPrice !== undefined && p.price < minPrice) return false;

    if (maxPrice !== undefined && p.price > maxPrice) return false;

    return true;
  });
}

module.exports = applyFilter;
