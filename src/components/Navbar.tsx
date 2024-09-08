import { Menu, X } from "lucide-react";
import { useState } from "react";
import icon from "../assets/Icon.png";
import navItems from "../constants/index.ts";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-5 w-5 mr-2" src={icon} alt="Logo" />
            <span className="text-2xl tracking-tight font-medium">
              Positivus
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 pt-4 text-lg items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <a href="/#" className="py-2 px-3 border rounded-md text-lg">
              Request a quote
            </a>
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} type="button">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="py-4 text-lg">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="/#" className="py-2 px-3 border rounded-md text-lg">
                Request a quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
