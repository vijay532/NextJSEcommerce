// pages/index.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch products
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Welcome to Our E-Commerce Store</h1>
      {categories.map((category) => (
        <div key={category.id} className={styles.productContainer}>
          <h2 className="heading2">{category.name}</h2>
          {products
            .filter((product) => product.categoryId === category.id)
            .map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
            ))}
          <Link href={`/productListing?category=${category.name}`}>
            View {category.name} Products
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
