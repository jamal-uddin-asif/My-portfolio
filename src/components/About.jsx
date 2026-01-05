import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiMongodb, SiExpress, SiFirebase, SiNetlify, SiStripe } from "react-icons/si";
import Education from "./education";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const skills = [
        {
            category: "Languages",
            items: [
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
            ],
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-gray-500 dark:text-white" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            ],
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
                { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
                { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
                { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const skillsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-item", {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });

            gsap.utils.toArray(".skill-item").forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    gsap.to(item, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
                });
                item.addEventListener("mouseleave", () => {
                    gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
                });
            });
        }, skillsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            className="py-20 bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 overflow-hidden"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto space-y-16"
                >
                    {/* About Me Section */}
                    <motion.div variants={itemVariants} className="text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                            About Me<span className="text-primary">.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Hi, I'm Jamal Uddin Asif, a passionate MERN Stack Developer who enjoys turning ideas into clean, scalable, and user-friendly digital experiences. My programming journey started with curiosity—trying to understand how websites work—and quickly grew into a full-time passion for building modern web applications. Over the years, I’ve sharpened my skills with JavaScript, React, Node.js, Express, and MongoDB, always focusing on writing efficient code and delivering meaningful solutions.

                            I enjoy working on projects that challenge me, whether it’s creating smooth user interfaces, optimizing API performance, or designing a full-stack system from scratch. Problem-solving excites me, and I love exploring new tools and technologies that help me build better and faster.

                            Outside of programming, I’m a big football lover. Whether it's watching matches, following my favorite teams, or playing the game myself, football keeps me active, motivated, and inspired. It’s my way of refreshing my mind and staying energetic.

                            Overall, I’m someone who loves learning, improving, and creating. My goal is to build products that are not just functional—but enjoyable for users.
                        </p>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div variants={itemVariants}>
                        <Education />
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div variants={itemVariants} className="space-y-8" ref={skillsRef}>
                        <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
                            My Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors"
                                >
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="skill-item flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-full hover:bg-primary/20 transition-colors cursor-default"
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                <span>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
