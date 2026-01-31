import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi"; // Install react-icons

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const { scrollYProgress } = useScroll();

    // Theme Logic
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled 
                ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg py-3" 
                : "bg-transparent py-6"
            }`}
        >
            {/* Scroll Progress Bar */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <nav className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white"
                >
                    Asif<span className="text-primary">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-semibold"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 transition-transform hover:scale-110"
                    >
                        {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                    </button>

                    <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all">
                        HIRE ME
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={() => setDarkMode(!darkMode)} className="dark:text-yellow-400 text-slate-900">
                        {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
                        {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-0 left-0 w-full bg-white dark:bg-slate-900 z-[-1] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl font-bold dark:text-white"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}