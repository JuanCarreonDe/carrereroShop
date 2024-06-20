import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Input } from "../components/ui/Input";

export const Product = () => {
  return (
    <section className="flex flex-col gap-14">
      <Nav />
      <main className="w-full flex flex-col sm:flex-row gap-14 pt-[20vh] p-4 sm:px-14">
        <div className="flex w-full sm:flex-[2] justify-center items-center">
          <img
            src=""
            alt=""
            className="w-[50%] sm:w-full aspect-square bg-neutral-900 rounded-md"
          />
        </div>
        <form className="flex sm:flex-[3] flex-col gap-5 justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="size">Talla</label>
              <select
                id="size"
                className="bg-neutral-900 rounded-md border-[1px] border-neutral-200 px-3 py-1"
              >
                <option value="-1">Seleccione</option>
                <option value="0">S</option>
                <option value="1">M</option>
                <option value="2">L</option>
                <option value="3">XL</option>
                <option value="4">XXL</option>
              </select>
            </div>
            <Input type="number" id="quantity" defaultValue={1}/>
          </div>
          <div className="flex gap-2">
            <Link
              to={"/checkout"}
              className="px-3 py-2 bg-neutral-900 rounded-md text-sm"
            >
              Comprar ahora
            </Link>
            <button className="px-3 py-2 bg-neutral-900 rounded-md text-sm">
              Agregar al carrito
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </section>
  );
};
