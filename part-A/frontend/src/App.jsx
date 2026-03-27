import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(
        `${apiUrl}/api/products/search?q=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.data);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [search, category, minPrice, maxPrice]);

  useEffect(() => {
    fetch(`${apiUrl}/api/products/search`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data.data));
  }, []);

  const categories = [...new Set(allProducts.map((p) => p.category))];

  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold m-4">Products</h2>
      <div className="flex ">
        <div className="m-3">
          <input
            type="text"
            name="search"
            placeholder="Search Products..."
            onChange={(e) => setSearch(e.target.value || "")}
            className="border rounded-2xl p-2 bg-gray-800"
          />
        </div>
        <div className="m-3">
          <select
            name="catergory"
            className="bg-gray-900 border p-2 rounded-2xl px-4"
            onChange={(e) => setCategory(e.target.value || "")}
          >
            <option value="">All</option>
            {categories &&
              categories.map((c) => (
                <option value={c} key={c}>
                  {c}
                </option>
              ))}
          </select>
        </div>
        <div className="m-3">
          <label htmlFor="min">Minimum Amount</label>
          <input
            type="text"
            placeholder="Enter Minimum Amount"
            onChange={(e) => setMinPrice(e.target.value)}
            className="bg-gray-900 border p-2 rounded-2xl px-4 mx-2"
          />
        </div>
        <div className="m-3">
          <label htmlFor="max">Maximum Amount</label>
          <input
            type="text"
            placeholder="Enter Maximum Amount"
            onChange={(e) => setMaxPrice(e.target.value || Infinity)}
            className="bg-gray-900 border p-2 rounded-2xl px-4 mx-2"
          />
        </div>
      </div>
      <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-gray-200">
          <tr className="">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Supplier</th>
            <th className="px-4 py-2 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((p) => (
              <tr key={p.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.category}</td>
                <td className="px-4 py-2">{p.price}</td>
                <td className="px-4 py-2">{p.supplier}</td>
                <td className="px-4 py-2">{p.stock}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
