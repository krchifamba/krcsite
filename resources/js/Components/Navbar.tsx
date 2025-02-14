import { Link } from "@inertiajs/react";
import React, { useState } from "react";

interface NavItem {
    id: number;
    text: string;
}

const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const toggleNavbar = (): void => setShowNavbar((prev) => !prev);

    const navItems: NavItem[] = [
        { id: 1, text: "Portfolio" },
        { id: 2, text: "About" },
        { id: 3, text: "Contact" },
        { id: 4, text: "Learn" },
    ];

    return (
        <nav className="shadow-md p-4">
            <div className="w-full mx-auto flex justify-between items-center">
                <Link className="text-lg font-bold" href="/">
                    Home
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-2">
                    {navItems.map((item: NavItem) => (
                        <Link
                            key={item.id}
                            href={`/${item.text.toLowerCase()}`}
                            className="hover:text-blue-500"
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col md:hidden">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 focus:outline-none"
                        onClick={toggleNavbar}
                        type="button"
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
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden ml-auto transition-all duration-300 ease-in-out ${
                    showNavbar
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className="flex flex-col items-center mt-4 p-4">
                    {navItems.map((item: NavItem) => (
                        <Link
                            key={item.id}
                            href={`/${item.text.toLowerCase()}`}
                            className="hover:text-blue-500 w-full text-center py-2"
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
