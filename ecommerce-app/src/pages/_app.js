// pages/_app.js
import Header from "../component/Header";
import "../styles/globals.scss"; // Global styles
import { CartProvider } from "../context/cartContext";
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
