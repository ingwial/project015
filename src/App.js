import { useState } from "react";
import "./App.css";
import { categories } from "./data";
import { subcategories } from "./data";

function App() {
  const [category, setCategory] = useState(categories[0]);
  const [subcategoriesCategory, setSubcategoriesCategory] = useState(
    subcategories.filter(
      (subcategory) => subcategory.categoryCode === category.code
    )
  );
  const [subcategory, setSubcategory] = useState(subcategoriesCategory[0]);

  function changeCategory(e) {
    setCategory(
      categories.find(
        (category) => category.code === Number.parseInt(e.target.value)
      )
    );
    const subcategoriesCategory = subcategories.filter(
      (subcategory) =>
        subcategory.categoryCode === Number.parseInt(e.target.value)
    );
    setSubcategoriesCategory(subcategoriesCategory);
    setSubcategory(subcategoriesCategory[0]);
  }

  function changeSubcategory(e) {
    setSubcategory(
      subcategoriesCategory.find(
        (subcategory) => subcategory.code === Number.parseInt(e.target.value)
      )
    );
  }

  return (
    <div className="formulario">
      <div>
        <select value={category.code} onChange={changeCategory}>
          {categories.map((category) => (
            <option key={category.code} value={category.code}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select value={subcategory.code} onChange={changeSubcategory}>
          {subcategoriesCategory.map((subcategoryCategory) => (
            <option
              key={subcategoryCategory.code}
              value={subcategoryCategory.code}
            >
              {subcategoryCategory.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>
            Category: <strong>{category.name}</strong>
          </li>
          <li>
            Subcategory: <strong>{subcategory.name}</strong>
          </li>
          <li>
            Price: <strong>{subcategory.price}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
