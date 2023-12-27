import PaymentInfo from "components/PaymentInfo";
import Header from "./components/Header";
import ProductList from "components/ProductList";
import ProductsProvider from "context/ProductsContext";
import Cart from "components/Cart";
import Footer from "components/Footer";
import PaymentInfoCards from "components/PaymentInfoCards";

function App() {
  return (
    <ProductsProvider>
      <Header />
      <PaymentInfo />
      <ProductList />
      <Cart />
      <PaymentInfoCards />
      <Footer />
    </ProductsProvider>
  );
}

export default App;
