interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  img: string;
}

interface Props {
  product: Product;
  isForHome?: boolean;
}

export const Card = ({ product, isForHome = true }: Props) => {
  return (
    // <article className={`flex flex-col gap-2`}>
    <article className={`${isForHome ? "min-w-[150px] sm:min-w-[250px]" : "flex flex-col"} gap-2 hover:scale-105 transition-transform`}>
      <img
        src={product.img}
        alt=""
        className="w-full aspect-square bg-neutral-900 rounded-md"
      />
      <h3>{product.name}</h3>
      <span className="text-neutral-300 text-sm">${product.price}</span>
    </article>
  );
};
