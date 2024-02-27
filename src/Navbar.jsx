import { useState } from "react";
import Hamburger from "./Hamburger.jsx";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!isOpen);
  }
  return (
    <>
      <nav className="fixed z-10 w-full bg-neutral-50">
        <div className="lg:grid grid-cols-12">
          <div className="col-span-6">
            <div className="border-b-[1px] flex">
              <a href="#" className="p-[16px] grow hover:bg-neutral-300 ">
                Fathul Fahmy
              </a>
              <button
                className="p-[16px] border-l-[1px] lg:hidden hover:bg-neutral-300"
                onClick={toggleOpen}
              >
                <Hamburger />
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="max-lg:block lg:hidden">
              <a href="#projects" onClick={toggleOpen}>
                <div className="navbar__tabs hover:bg-red-300 focus:bg-red-300">
                  <p className="text-center">Projects</p>
                </div>
              </a>
              <a href="#about" onClick={toggleOpen}>
                <div className="navbar__tabs hover:bg-green-300 focus:bg-green-300">
                  <p className="text-center">About</p>
                </div>
              </a>
              <a href="#contact" onClick={toggleOpen}>
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
