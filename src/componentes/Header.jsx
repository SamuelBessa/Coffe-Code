import logo from "../assets/img/logo.png";
import { Search, ShoppingCart } from "lucide-react";
import '../styled/header.css';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[99] custom-border text-[var(--white)] header-custom">
      <section className="flex items-center justify-between pt-[1.5rem] pb-[1.5rem]">
        <a href="#">
          <img src={logo} alt="logo-coffe" />
        </a>

        <nav className="text-[1.8rem] flex space-x-[1rem] menu-links">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#menu">Menu</a>
          <a href="#review">Avaliações</a>
          <a href="#-address">Endereço</a>
        </nav>

        <div className="flex gap-[1.5rem] items-center cursor-pointer icons">
          <p> <Search /> </p>
          <p> <ShoppingCart /> </p>
        </div>
      </section>
    </header>
  );
}

export default Header;