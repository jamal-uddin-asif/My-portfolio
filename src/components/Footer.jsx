import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="font-display bg-background-light dark:bg-background-dark overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-6 border-t border-zinc-200 dark:border-zinc-800"
            >
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Made with ❤️ by Asif
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                        © {new Date().getFullYear()} Asif. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}
