import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Products } from "../screens/Products";
import { CheckOut } from "../screens/CheckOut";

export const Navegation = () => {
  return (
    <section className="bg-gradient-to-br from-[#151515] to-[#151515] via-black min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
