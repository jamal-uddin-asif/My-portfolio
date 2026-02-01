import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaArrowUp } from "react-icons/fa";

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/jamal-uddin-asif", color: "#333" },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/asif-jamaluddin/', color: "#0077b5" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/asifzehendmg", color: "#1877f2" },
   
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-white dark:bg-[#0a0a0a] pt-20 pb-10 overflow-hidden border-t border-slate-100 dark:border-white/5">
            {/* Background Text Effect (Marquee) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
                <motion.h1 
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-[150px] font-black uppercase whitespace-nowrap leading-none"
                >
                    JAMAL UDDIN ASIF • WEB DEVELOPER • CREATIVE DESIGNER • JAMAL UDDIN ASIF • WEB DEVELOPER • 
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
                    
                    {/* 🚀 Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">A</div>
                            <span className="text-2xl font-black tracking-tighter dark:text-white uppercase">Asif<span className="text-primary">.</span></span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[250px] text-center md:text-left leading-relaxed">
                            Building digital experiences that combine performance with aesthetics. Let's create something meaningful.
                        </p>
                    </motion.div>

                    {/* 🌍 Social Links */}
                    <div className="flex flex-col items-center gap-6">
                        <h3 className="text-xs font-black tracking-[0.3em] uppercase text-slate-400">Follow Me</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="size-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-xl text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* 🔝 Back to Top */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-end gap-4"
                    >
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold text-xs tracking-widest transition-all"
                        >
                            BACK TO TOP
                            <div className="size-6 bg-primary rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <FaArrowUp className="text-[10px] text-white" />
                            </div>
                        </motion.button>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scroll for more</p>
                    </motion.div>

                </div>

                {/* 📜 Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <a href="#" className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">Terms of Service</a>
                    </div>
                    
                    <motion.p 
                        className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2"
                    >
                        Designed & Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-red-500">❤️</motion.span> by <span className="text-slate-900 dark:text-white">JAMAL UDDIN ASIF</span>
                    </motion.p>

                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
        </footer>
    );
}