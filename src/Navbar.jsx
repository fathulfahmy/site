import { useState } from "react";
import Hamburger from "./Hamburger.jsx";
import Close from "./Close.jsx";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  function toggleNav() {
    setOpen(!isOpen);
  }
  function closeNav() {
    setOpen(false);
  }
  return (
    <>
      <nav className="fixed z-10 w-full border-t-[1px] bg-neutral-50">
        <div className="lg:grid grid-cols-12">
          <div className="col-span-6">
            <div className="border-b-[1px] flex">
              <a
                href="#"
                className="p-[16px] grow hover:bg-neutral-300 "
                onClick={closeNav}
              >
                Fathul Fahmy
              </a>
              <button
                className="p-[16px] border-l-[1px] lg:hidden hover:bg-neutral-300"
                onClick={toggleNav}
              >
                {isOpen ? <Close /> : <Hamburger />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="max-lg:block lg:hidden">
              <a href="#projects" onClick={toggleNav}>
                <div className="navbar__tabs hover:bg-red-300 focus:bg-red-300">
                  <p className="text-center">Projects</p>
                </div>
              </a>
              <a href="#about" onClick={toggleNav}>
                <div className="navbar__tabs hover:bg-green-300 focus:bg-green-300">
                  <p className="text-center">About</p>
                </div>
              </a>
              <a href="#contact" onClick={toggleNav}>
                <div className="navbar__tabs hover:bg-blue-300 focus:bg-blue-300">
                  <p className="text-center">Contact</p>
                </div>
              </a>
            </div>
          )}

          <div className={`max-lg:hidden col-span-6 lg:grid grid-cols-3`}>
            <a href="#projects">
              <div className="navbar__tabs hover:bg-red-300 focus:bg-red-300">
                <p className="text-center">Projects</p>
              </div>
            </a>
            <a href="#about">
              <div className="navbar__tabs hover:bg-green-300 focus:bg-green-300">
                <p className="text-center">About</p>
              </div>
            </a>
            <a href="#contact">
              <div className="navbar__tabs hover:bg-blue-300 focus:bg-blue-300">
                <p className="text-center">Contact</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
