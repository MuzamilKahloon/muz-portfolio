import { useState } from "react";
import logo from '../../public/assets/logo.jpg'
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
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
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <a href="#">
                                <img src={logo} width={150} alt="logo" />
                            </a>
                        </div>
                        <div>
                            
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );

};

export default Navbar;
