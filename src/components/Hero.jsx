import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img from "../assets/My_Professonal_photo.png";
import gsap from "gsap";
import Container from "./Container";

export default function Hero() {
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image floating animation
      gsap.to(".hero-image", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Mouse parallax effect on image
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".hero-image", {
          rotateY: xPos,
          rotateX: -yPos,
          transformPerspective: 1000,
          duration: 0.5,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative p-3   flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950  py-20"
    >
      <Container>
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              MERN Stack Specialist
            </span>
            
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
              Building Digital <br />
              {/* MERN Stack
             Developer */}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-cyan-400">
                Masterpieces
              </span>
            </h1>

            <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
           
I'm    <span className="text-slate-900 dark:text-white font-bold">Jamal Uddin Asif</span>, crafting high-performance digital experiences in Bangladesh. I turn complex problems into elegant, user-centric solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Jamal-Uddin-Resume.pdf"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-primary/40 transition-all text-center"
              >
                Download Resume
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center"
              >
                Explore Projects
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Professional Square Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[450px] aspect-[4/5]"
          >
            {/* Background Decorative Frame */}
            <div className="absolute inset-0 border-2 border-primary/30 translate-x-4 translate-y-4 rounded-3xl -z-10" />
            
            <div className="hero-image w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-200">
              <img
                src={img}
                alt="Jamal Uddin Asif"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hidden sm:block"
            >
              <h4 className="text-3xl font-black text-primary leading-none">1+</h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
      </Container>
    </section>
  );
}