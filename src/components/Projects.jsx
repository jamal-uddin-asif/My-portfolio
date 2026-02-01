import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    
    const projects = [
        {
            title: "Style Decor",
            image:
                "https://i.ibb.co.com/1t4tpd13/style-decor1.png",
            details:
                "Style Decor is a service-based web application where users can book home decor services online.ensuring transparency and smooth service delivery.",
            Challenges: 'One of the major challenges was integrating the Stripe payment system securely and correctly handling payment confirmation. Managing role-based workflows between users, admins, and decorators, as well as updating service status step by step in real time, also required careful state management and backend logic.',
            tech: ["React", "Node.js", "MongoDB", "Express",'firebase','Stripe','Tailwindcss'],
          
            githubLink: "https://github.com/jamal-uddin-asif/Style-Decor-Client",
            liveLink: "https://style-decor123.netlify.app/"
        },
        {
            title: "The Book Haven",
            image:
                "https://i.ibb.co.com/KxVKrnnN/The-book-haven.png",
            details:
                "A simple web application where users can add books, view details,delete and edit books. ",
            Challenges: 'Book Haven challenged me to optimize data handling, implement dynamic filtering, and keep the interface fast and responsive. Integrating authentication and managing state across multiple components also tested my skills.',
            tech: ["React", 'Tailwindcss', "Node.js", "MongoDB", "Express",'firebase',],
          
            githubLink: "https://github.com/jamal-uddin-asif/The-Book-Haven-Client-",
            liveLink: "https://the-book-haven12.netlify.app/"
        },
        {
            title: "Toys World",
            image:
                'https://i.ibb.co.com/QjcKhGb2/toysworld-Portfolio.png',
            details:
                "A simple web application where users can explore toys, view details,search and sort by price toys.",
                Challenges:'Building the Toys World app required optimizing search and sort features to handle various toy categories smoothly. Ensuring fast performance while maintaining a clean and responsive UI was a key challenge.',
            tech: ["React", "tailwindcss", "firebase", 'react router',],
  githubLink: "https://github.com/jamal-uddin-asif/Toys-World",
            liveLink: "https://toys-world.netlify.app/"
        },
        {
            title: "Hero Apps",
            image: 'https://i.ibb.co.com/2fbPZvb/heroapp-Porfolio.png',
            details:
                "A web application for apps .User can install a app and see details of any app, user can uninstall their apps",
                Challenges:'Hero Apps is a smart app management platform where users can explore apps, view detailed information, and install or uninstall them effortlessly. It features a fast real-time search system that helps users quickly find the apps they need. Designed with a clean and modern UI, it ensures a smooth and intuitive app-browsing experience.',
            tech: ["React ", "tailwindcss", "React router"],
            githubLink: "https://github.com/jamal-uddin-asif/Hero-Apps",
            liveLink: "https://hero-io-222.netlify.app/"
        },
    ];

    return (
     <Container>
            <section id="projects" className="py-20 bg-transparent font-display">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white">
                            Selected Works<span className="text-primary text-6xl">.</span>
                        </h1>
                        <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
                            A collection of full-stack applications and frontend challenges I've tackled.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-primary/20 transition-all duration-500"
                            >
                                {/* Image Container with Zoom Effect */}
                                <div className="relative h-64 overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="flex gap-4">
                                            <a href={project.liveLink} target="_blank" className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                                            <a href={project.githubLink} target="_blank" className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:scale-110 transition-transform"><FaGithub /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && <span className="text-[10px] font-bold text-primary">+{project.tech.length - 3} More</span>}
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-4 rounded-xl border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary font-bold transition-all duration-300"
                                    >
                                        View Project
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Professional Scrollable Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                        >
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" 
                                onClick={() => setSelectedProject(null)}
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ y: 100, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 100, opacity: 0, scale: 0.95 }}
                                className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
                            >
                                {/* Close Button */}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-primary backdrop-blur-md text-white rounded-full transition-all"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {/* Scrollable Area */}
                                <div className="overflow-y-auto custom-scrollbar">
                                    <img 
                                        src={selectedProject.image} 
                                        className="w-full h-[300px] md:h-[450px] object-cover" 
                                        alt="" 
                                    />
                                    
                                    <div className="p-8 md:p-12">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                            <div>
                                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                                                    {selectedProject.title}
                                                </h2>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {selectedProject.tech.map((tech, i) => (
                                                        <span key={i} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <a href={selectedProject.liveLink} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform">
                                                    Live Demo <FaExternalLinkAlt size={14} />
                                                </a>
                                                <a href={selectedProject.githubLink} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">
                                                    Code <FaGithub size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-10">
                                            <div className="md:col-span-2 space-y-8">
                                                <section>
                                                    <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-tighter">About Project</h3>
                                                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                                        {selectedProject.details}
                                                    </p>
                                                </section>

                                                <section>
                                                    <h3 className="text-xl font-bold text-red-500 mb-3 uppercase tracking-tighter">The Challenges</h3>
                                                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed border-l-4 border-red-500/20 pl-6 italic">
                                                        {selectedProject.Challenges}
                                                    </p>
                                                </section>
                                            </div>
                                            
                                   
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </Container>
    );
}

