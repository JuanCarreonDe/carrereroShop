import { CategoryCard } from "./CategoryCard";

interface Props {
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

export const Categories = ({ categories }: Props) => {
  return (
    <section className="w-full flex flex-col gap-10">
      <h2 className="text-center text-2xl font-semibold uppercase">
        categorias
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-7 sm:grid-cols-3 md:gap-14">
        {categories.map((categorie) => (
          <CategoryCard category={categorie} key={categorie.id} />
        ))}
      </div>
    </section>
  );
};
