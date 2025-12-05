import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img from '../assets/myPhoto.jpg'
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="flex  mt-18 flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8"
            >
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <img
                    ref={imageRef}
                    alt="A black and white profile photo of Luca, looking up and to the side."
                    className="w-full h-full object-cover rounded-full p-2"
                    src={img}
                />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-600 dark:text-slate-400 mb-2"
            >
                Hey, I'm Jamal Uddin Asif 👋
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-5xl sm:text-6xl font-black leading-tight text-slate-900 dark:text-white"
            >
                <span className="text-primary">MERN stack</span>
                <span>Developer</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 max-w-md text-slate-600 dark:text-slate-400 text-lg"
            >
                I'm a MERN stack developer based in Italy, I'll help you build beautiful
                websites your users will love.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-xs"
            >
                <a
                    className="w-full bg-slate-900 dark:bg-primary text-white dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    href="/resume.pdf"
                    download='resume.pdf'
                >
                    Resume Download
                </a>
                {/* <a
                    className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    href="#"
                >
                    Browse Projects
                </a> */}
            </motion.div>
        </div>
    );
}
