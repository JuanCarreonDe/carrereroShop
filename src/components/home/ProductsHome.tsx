import { Card } from "../Card";

interface Props {
  title: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  img: string;
}
export const ProductsHome = ({ products, title }: Props) => {
  return (
    <section className="w-full flex flex-col gap-10">
      <h2 className="text-center text-2xl font-semibold uppercase">{title}</h2>
        <div className="flex gap-7 overflow-x-scroll pb-5 pt-3">
          {products.map((product: Product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
    </section>
  );
};
