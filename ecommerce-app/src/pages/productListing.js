import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/productlisting.module.scss";
import Link from "next/link";

const ProductListing = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the category parameter from the URL
    if (category) {
      fetch("/api/productByCategory")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data[category]);
        })
        .catch((error) => console.error("Error fetching categories:", error));
    }
  }, [category]);

  return (
    <div className={styles.container}>
      <h1>Product Listing for {category}</h1>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link href={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
