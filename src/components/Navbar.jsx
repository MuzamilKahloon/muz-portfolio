import { useState } from "react";
import logo from "../../public/assets/logom.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants/index"; // Assuming you're importing NAVIGATION_LINKS from a constants file

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85; // Adjust this value as needed for your layout
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 z-50 top-4">
                {/* Desktop Menu */}
                <div className="items-center justify-center hidden max-w-2xl py-3 mx-auto border rounded-lg border-stone-50/30 bg-black/20 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between w-full gap-6 px-4">
                        <a href="#">
                            <img
                                src={logo}
                                className="object-cover w-12 h-12 rounded-full"
                                alt="logo"
                            />
                        </a>
                        <ul className="flex items-center gap-6">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-white hover:opacity-80 whitespace-nowrap"
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center justify-between px-4 lg:hidden">
                    <a href="#">
                        <img
                            src={logo}
                            className="object-cover w-12 h-12 rounded-full"
                            alt="logo"
                        />
                    </a>
                    <button
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="w-5 h-6 text-white" />
                        ) : (
                            <FaBars className="w-5 h-6 text-white" />
                        )}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <ul className="absolute left-0 right-0 z-50 flex flex-col gap-4 p-4 bg-black/50 backdrop-blur-md top-16">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="block text-lg text-white hover:opacity-80 whitespace-nowrap"
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
