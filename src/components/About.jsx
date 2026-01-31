import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNetlify,
  SiStripe,
} from "react-icons/si";
import Education from "./Education";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const skillsRef = useRef(null);
  const textRef = useRef(null);

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-500 dark:text-white" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="text-black dark:text-white" />,
        },
        { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
        {
          name: "Vercel",
          icon: <SiVercel className="text-black dark:text-white" />,
        },
        { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Skills Entrance
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      });

      // Text Reveal Animation
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      {/* Ambient Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20" ref={textRef}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6"
            >
              About Me<span className="text-primary">.</span>
            </motion.h2>
            <div className="w-20 h-2 bg-primary mx-auto rounded-full mb-10" />

            <p className="about-text text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-left md:text-center italic">
              "I don't just write code; I build digital experiences that
              matter."
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-12 text-left">
              <p className="about-text text-slate-600 dark:text-slate-300 leading-loose">
                Hi, I'm Jamal Uddin Asif, a passionate MERN Stack Developer who
                enjoys turning ideas into clean, scalable, and user-friendly
                digital experiences. My programming journey started with
                curiosity—trying to understand how websites work—and quickly
                grew into a full-time passion for building modern web
                applications. Over the years, I’ve sharpened my skills with
                JavaScript, React, Node.js, Express, and MongoDB, always
                focusing on writing efficient code and delivering meaningful
                solutions. I enjoy working on projects that challenge me,
                whether it’s creating smooth user interfaces, optimizing API
                performance,
              </p>
              <p className="about-text text-slate-600 dark:text-slate-300 leading-loose">
                or designing a full-stack system from scratch. Problem-solving
                excites me, and I love exploring new tools and technologies that
                help me build better and faster. Outside of programming, I’m a
                big football lover. Whether it's watching matches, following my
                favorite teams, or playing the game myself, football keeps me
                active, motivated, and inspired. It’s my way of refreshing my
                mind and staying energetic. Overall, I’m someone who loves
                learning, improving, and creating. My goal is to build products
                that are not just functional—but enjoyable for users.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="mb-24">
            <Education />
          </div>

      {/* Skills Grid - Super Animated & Constant Motion */}
      
          <div ref={skillsRef} className="mt-32">
            <h3 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-16 uppercase tracking-widest">
              Technical Arsenal
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.flatMap(group => group.items).map((item, i) => (
                <motion.div
                  key={i}
                  className="skill-card group relative"
                  // Constant Floating Animation
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2, // একেকটা একেক সময় ভাসবে
                  }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  {/* Outer Glow Effect (Always Visible but subtle) */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-2xl blur-sm group-hover:blur-md group-hover:from-primary group-hover:to-blue-600 transition duration-500"></div>
                  
                  <div className="relative flex flex-col items-center justify-center p-8 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 h-full overflow-hidden">
                    
                    {/* Background Decorative Moving Light */}
                    <motion.div 
                      className="absolute -inset-full h-full w-1/2 z-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-[-25deg]"
                      animate={{
                        left: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                      }}
                    />

                    {/* Icon with Pulse Animation */}
                    <motion.div 
                      className="text-5xl md:text-6xl mb-4 z-10"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Name */}
                    <span className="text-sm md:text-base font-black text-slate-800 dark:text-slate-200 uppercase tracking-tighter z-10">
                      {item.name}
                    </span>

                    {/* Animated Underline */}
                    <motion.div 
                      className="absolute bottom-4 h-1 bg-primary rounded-full"
                      initial={{ width: "10%" }}
                      whileHover={{ width: "40%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
