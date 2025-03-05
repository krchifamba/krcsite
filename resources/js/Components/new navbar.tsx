import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: number;
  text: string;
  href: string;
}

interface Socials {
  id: number;
  icon: any;
  href: string;
}

export default function Navbar() {
  const NavItem: NavItem[] = [
    { id: 1, text: "Portfolio", href: "#portfolio" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Contact", href: "#contact" },
  ];

  const socials: Socials[] = [
    { id: 1, icon: faLinkedin, href: "https://www.linkedin.com/in/krchifamba/" },
    { id: 2, icon: faGithub, href: "https://www.github.com/krchifamba" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false); // Used to prevent hydration issues

  // Ensures the component is fully mounted before interacting with state
  useEffect(() => {
    console.log("Navbar mounted");
    setHydrated(true);
  }, []);

  const toggleMenu = () => {
    console.log("Button clicked!"); // Debugging log
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="shadow-md bg-gray-800 text-white relative">
      <div className="w-full mx-auto justify-between items-center sm:hidden md:flex lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        {/* Home Link */}
        <Link className="hidden md:flex text-lg font-bold px-2" href="#top">
          Home
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {NavItem.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="hover:text-gray-900 hover:bg-slate-50 h-full p-3 transition-all duration-150 ease-in-out"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="hidden md:flex space-x-4">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              className="hover:text-gray-900 hover:bg-slate-50 h-full p-3 transition-all duration-150 ease-in-out"
            >
              <FontAwesomeIcon icon={social.icon} size="2x"/>
            </a>
          ))}
        </div>
      </div>

      {/* Button to Open Menu (Only render after hydration to prevent mismatch) */}
      {hydrated && (
        <button
          onClick={toggleMenu}
          className="fixed bottom-6 left-6 bg-gray-800 text-white p-4 rounded-full shadow-lg z-[9999] md:hidden"
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Menu */}
      {hydrated && (
        <div
          className={`flex ml-auto h-screen transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-screen opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col items-center mt-4 p-4">
            {NavItem.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="hover:text-blue-500 w-full text-center py-2"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
