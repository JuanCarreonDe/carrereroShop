import { Link } from "react-router-dom";
import carrereroLogo from "../assets/carrerero.svg";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center shadow-2xl py-4 px-4 sm:px-14 fixed top-0 left-0 h-20 z-50 bg-neutral-950">
      <img src={carrereroLogo} alt="" className="aspect-square h-full" />
      <div className="flex gap-5">
        <Link className="hover:scale-110 transition-transform" to={"/"}>
          Inicio
        </Link>
        <Link className="hover:scale-110 transition-transform" to={"/products"}>
          Productos
        </Link>
        <span>|</span>
        <Link className="hover:scale-110 transition-transform flex items-center" to={"/cart"}>
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};
