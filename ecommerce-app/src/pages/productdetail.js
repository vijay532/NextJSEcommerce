// pages/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/productdetail.module.scss";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId parameter from the URL
    if (productId) {
      fetch(`/api/productById/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [productId]);

  if (!product) {
    // Optionally, you can show a loading indicator or handle other cases
    return <p>Loading...</p>;
  }
  console.log("product details");
  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
