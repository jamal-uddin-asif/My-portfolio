import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    className="font-bold text-xl text-slate-900 dark:text-white"
                >
                    Asif's portfolio
<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white z-50 relative"
                >
                    <span className="material-icons text-xl">
                        {isOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-xl p-6 flex flex-col gap-4 md:hidden"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-lg text-slate-900 dark:text-white">
                                    Menu
                                </span>
                            </div>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium text-lg py-2 border-b border-slate-100 dark:border-slate-800"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white text-center py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-2"
                            >
                                Hire Me
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
