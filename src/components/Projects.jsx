import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
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
        <section
            id="projects"
            className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200"
        >
            <div className="flex flex-col ">

                <main className="flex-grow px-6 py-8">
                    <div className="space-y-12">
                        <section>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8">
                                Projects<span className="text-primary">.</span>
                            </h1>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col shadow-lg"
                                    >
                                        <img
                                            alt={`${project.title} Project Image`}
                                            className="w-full h-48 object-cover"
                                            src={project.image}
                                        />
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex-grow">
                                                {project.title}
                                            </h2>
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-md text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors mt-4"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
                        >
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-center">

                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {selectedProject.title}
                                </h2>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Close
                                </button>
                                </div>
                                <div>
                                    <div>
                                        
                                <button className="bg-primary p-2 rounded-xl"><a href={selectedProject.liveLink}>Live Link</a></button>
                                <button className="bg-primary p-2 rounded-xl ml-2 mb-2"><a href={selectedProject.githubLink}>Github Link</a></button>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {selectedProject.details}
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {selectedProject?.Challenges}
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {selectedProject?.improvements}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

