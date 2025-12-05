import React from "react";

const Education = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">
                Education
            </h3>
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 w-full max-w-lg text-center hover:border-primary/50 transition-colors">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    BA Third Year
                </h4>
                <p className="text-primary font-medium">Feni Govt. College</p>
            </div>
        </div>
    );
};

export default Education;