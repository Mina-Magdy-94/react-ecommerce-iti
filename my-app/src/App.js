import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProductForm from "./components/ProductForm";
import ProductDashboard from "./components/ProductDashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="add" element={<ProductForm />} />
        <Route path="edit/:id" element={<ProductForm />} />
        <Route path="dashboard" element={<ProductDashboard />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
