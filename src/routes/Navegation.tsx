import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { ProductsList } from "../screens/ProductsList";
import { CheckOut } from "../screens/CheckOut";
import products from "../mocks/products.json";
import categories from '../mocks/categories.json'
import { Product } from "../screens/Product";


export const Navegation = () => {
  return (
    <section className="bg-gradient-to-br from-[#151515] to-[#151515] via-black min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductsList products={products} categories={categories}/>} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
