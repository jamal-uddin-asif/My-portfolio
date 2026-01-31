import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-8 py-10">
            <div className="flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-primary" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Education
                </h3>
            </div>
            
            <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group bg-white dark:bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 w-full max-w-2xl overflow-hidden"
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                            2022 - Present
                        </span>
                        <h4 className="text-2xl font-black text-slate-800 dark:text-white mt-3">
                            Bachelor of Arts (BA)
                        </h4>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                            Third Year Student
                        </p>
                    </div>
                    <div className="h-px w-full md:w-px md:h-16 bg-slate-200 dark:bg-slate-700 mx-4" />
                    <div className="text-center md:text-right">
                        <p className="text-xl font-bold text-slate-800 dark:text-white">Feni Govt. College</p>
                        <p className="text-slate-500 text-sm">National University, Bangladesh</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Education;