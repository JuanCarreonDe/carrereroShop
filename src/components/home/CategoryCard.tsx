import { Link } from "react-router-dom";

interface Props{
    category: Category;
}

interface Category {
    id: number;
    name: string;
  }
export const CategoryCard = ({category} : Props) => {
  return (
    <Link to={``} className="w-full aspect-[9/12] bg-neutral-900 rounded-md hover:scale-105 transition-transform">
        <img src="" alt="" />
        <p>{category.name}</p>
    </Link>
  )
}
