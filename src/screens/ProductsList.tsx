import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Category } from "../types/Category";
import type { Product } from "../types/Product";

interface Props {
  products: Product[];
  categories: Category[];
}

export const ProductsList = ({ products, categories }: Props) => {
  return (
    <section className="flex flex-col gap-14">
      <Nav />
      <main className="w-full flex-col sm:flex-row flex gap-14 pt-[20vh] p-4 sm:px-14">
        <aside className="flex flex-1 justify-center items-center sm:items-start">
          <div className="bg-neutral-900 p-4 rounded-md h-fit">
            <h2 className="sm:hidden">Categorias</h2>
            <ul className="hidden sm:flex flex-col gap-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={"/"} className="hover:scale-105 transition-transform">{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="grid flex-[4] grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-7 lg:grid-cols-3 md:gap-14">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </main>
      <Footer />
    </section>
  );
};
