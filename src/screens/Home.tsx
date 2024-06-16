import { Nav } from "../components/Nav";

import { ProductsHome } from "../components/home/ProductsHome";
import products from "../mocks/products.json";
import newProducts from "../mocks/newProducts.json";
import categories from "../mocks/categories.json";
import { Slider } from "../components/home/Slider";
import { Categories } from "../components/home/Categories";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <section className="flex flex-col gap-14">
      <Nav />
      <main className="w-full flex flex-col gap-14 pt-[20vh] p-4 sm:px-14">
        <Slider />
        <ProductsHome products={products} title="nuevos lanzamientos" />
        <ProductsHome products={newProducts} title="más vendidos" />
        <Categories categories={categories} />
      </main>
        <Footer />
    </section>
  );
};
