import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface NavItem {
  id: number;
  text: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { id: 1, text: "Portfolio" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
  ];

  return (
    <nav className="shadow-md bg-gray-800 text-white relative">
      <div className="w-full mx-auto flex justify-between items-center sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        {/* Home Link */}
        <Link className="text-lg font-bold" to="/">
          Home
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`#${item.text.toLowerCase()}`} // Adjust navigation logic
              className="hover:text-gray-900 hover:bg-slate-50 h-full p-3 transition-all duration-150 ease-in-out"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-light"
              className="text-white bg-gray-800 border-none p-2 focus:ring-0"
              id="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-full bg-gray-800 text-white text-center">
              {navItems.map((item) => (
                <Dropdown.Item
                  as={Link}
                  key={item.id}
                  to={`#${item.text.toLowerCase()}`} // Adjust navigation logic
                  className="hover:text-blue-500 py-2"
                >
                  {item.text}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
