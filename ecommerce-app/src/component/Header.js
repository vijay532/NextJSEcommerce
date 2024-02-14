// components/Header.js
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss"; // Create a SCSS module for styling
import { useCart } from "../context/cartContext";

const Header = () => {
  const { cart } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Your Logo</Link>
      </div>
      <div className={styles.nav}>
        {/* <Link href="/profile">
          <a>Profile</a>
        </Link> */}
        <Link href="/cart">Cart ({cart.length})</Link>
      </div>
    </header>
  );
};

export default Header;
