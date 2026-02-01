import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') || 'light'); 

     // Theme Toggle Logic
    useEffect(() => {
        localStorage.setItem('theme', darkMode)
        if (darkMode === 'dark') document.documentElement.classList.add(darkMode);
        else document.documentElement.classList.remove('dark');
    }, [darkMode]);

    const handleToggle = () => {
       setDarkMode(prev=> prev == 'dark'? 'light': 'dark')
    }


    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Handle Scroll & Active Section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active Section Detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled 
                ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3" 
                : "bg-transparent py-6"
            }`}
        >
            {/* Animated Progress Bar */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-500 to-primary origin-left"
                style={{ scaleX }}
            />

            <nav className="container mx-auto px-6 flex justify-between items-center">
                {/* 🚀 Professional Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 group"
                >
                    <div className="relative size-10 flex items-center justify-center bg-primary rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/30">
                        <span className="text-white font-black text-xl -rotate-3 group-hover:-rotate-12 transition-transform uppercase">A</span>
                        <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                            Asif<span className="text-primary">.</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase">Portfolio</span>
                    </div>
                </motion.a>

                {/* 💻 Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1 mr-4 bg-slate-100 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative ${darkMode === 'dark' && 'text-white'} px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-full ${
                                        isActive ? "text-black" : "text-slate-400 dark:text-slate-400 hover:text-primary"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                    
                    <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10 mx-2" />

                    <button 
                        onClick={handleToggle}
                        className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-yellow-400 transition-all active:scale-90"
                    >
                        {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
                    </button>

                    <a href="#contact" className="ml-4 group relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3 rounded-full text-xs font-black tracking-widest transition-all hover:pr-10">
                        <span className="relative z-10">HIRE ME</span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full group-hover:-translate-x-3 transition-transform duration-300">→</span>
                    </a>
                </div>

                {/* 📱 Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 dark:text-yellow-400 text-slate-900 bg-slate-100 dark:bg-white/5 rounded-lg">
                        {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white p-2">
                        {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
                    </button>
                </div>
            </nav>

            {/* 📱 Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 h-screen w-full bg-white dark:bg-[#0a0a0a] z-[150] flex flex-col items-center justify-center gap-10"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-4 text-slate-900 dark:text-white">
                            <HiX size={40} />
                        </button>

                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`text-5xl font-black uppercase tracking-tighter ${
                                    activeSection === link.href.substring(1) ? "text-primary" : "text-slate-300 dark:text-slate-700"
                                } hover:text-primary dark:hover:text-white transition-colors`}
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