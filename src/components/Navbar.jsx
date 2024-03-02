import { useState } from "react";
import Hamburger from "./icons/Hamburger.jsx";
import Close from "./icons/Close.jsx";

function Main({ isOpen, closeNav, toggleNav }) {
  return (
    <div className="flex border-b">
      <a href="#" className="grow p-4" onClick={closeNav}>
        Fathul Fahmy
      </a>
      <button className="border-l p-4 lg:hidden" onClick={toggleNav}>
        {isOpen ? <Close /> : <Hamburger />}
      </button>
    </div>
  );
}

function VerticalMenu({ isOpen, closeNav }) {
  if (isOpen) {
    return (
      <div className="lg:hidden">
        <a href="#projects" onClick={closeNav} className="navbar__tab">
          Projects
        </a>
        <a href="#about" onClick={closeNav} className="navbar__tab">
          About
        </a>
        <a href="#contact" onClick={closeNav} className="navbar__tab">
          Contact
        </a>
      </div>
    );
  }
}

function HorizontalMenu() {
  return (
    <div className="max-lg:hidden lg:grid lg:grid-cols-3">
      <a href="#projects" className="navbar__tab">
        Projects
      </a>
      <a href="#about" className="navbar__tab">
        About
      </a>
      <a href="#contact" className="navbar__tab">
        Contact
      </a>
    </div>
  );
}

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!isOpen);
  }

  function closeNav() {
    setOpen(false);
  }

  return (
    <nav className="fixed w-full border-t bg-neutral-50 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-6">
        <Main isOpen={isOpen} closeNav={closeNav} toggleNav={toggleNav} />
      </div>
      <div className="lg:col-span-6">
        <VerticalMenu isOpen={isOpen} closeNav={closeNav} />
        <HorizontalMenu />
      </div>
    </nav>
  );
}

export default Navbar;
