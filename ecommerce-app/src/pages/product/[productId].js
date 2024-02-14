// pages/product/[productId].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/productdetail.module.scss";
import { useCart } from "../../context/cartContext";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart"); // Redirect to the cart page after adding to the cart
  };
  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.name} />
        <div className={styles.description}>
          <p>
            <b>Description:</b> {product.description}
          </p>
          <strong>Price: ${product.price.toFixed(2)}</strong>
          <input
            type="button"
            className={styles.addtocart}
            value={"Add To Cart"}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
