import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Menu, X } from "lucide-react";

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
        {
            id: 1,
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/krchifamba/",
        },
        {
            id: 2,
            icon: faGithub,
            href: "https://www.github.com/krchifamba",
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // Prevents instant jump

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setMenuOpen(false); // Close mobile menu after clicking
    };

    return (
          <nav className="fixed w-screen top-0 shadow-md bg-gray-800 text-white flex justify-center z-50">
              {/* Desktop Navigation */}
              <div className="hidden sm:flex justify-between items-center w-full max-w-5xl px-4">
                {/* Home Link */}
                <a
                    className="text-lg font-bold"
                    href="#top"
                    onClick={(e) => handleSmoothScroll(e, "#top")}
                >
                    Home
                </a>

                {/* Desktop Menu */}
                <div className="flex space-x-6">
                    {NavItem.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="hover:text-gray-900 hover:bg-slate-50 h-full px-3 py-4 transition-all duration-150 ease-in-out cursor-pointer"
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex space-x-4">
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 hover:bg-slate-50 h-full p-3 transition-all duration-150 ease-in-out"
                        >
                            <FontAwesomeIcon icon={social.icon} size="2x" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-full shadow-lg z-[9999] cursor-pointer sm:hidden transition-transform duration-300"
                aria-label="Open Menu"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Pop-out Menu */}
            <div
                className={`fixed bottom-20 right-6 w-72 h-auto bg-gray-900 text-white rounded-xl shadow-lg p-6 z-[9998] transition-all duration-500 ease-in-out ${
                    menuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
                }`}
            >
                {/* Navigation Links */}
                <div className="flex flex-col items-center space-y-4 text-xl font-semibold">
                    <a
                        key={0}
                        className="hover:text-blue-400 transition-all duration-300 cursor-pointer"
                        href="#top"
                        onClick={(e) => handleSmoothScroll(e, "#top")}
                    >
                        Back to Top
                    </a>

                    {NavItem.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="hover:text-blue-400 transition-all duration-300 cursor-pointer"
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 mt-6 justify-center">
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-blue-400 transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
