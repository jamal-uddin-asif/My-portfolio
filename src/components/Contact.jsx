import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import Container from "./Container";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'; // npm i @emailjs/browser install kore nite hobe

export default function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    console.log(import.meta.env.VITE_SERVICE_ID)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);


        // EmailJS setup (Apnar Public Key, Service ID, Template ID basale eita kaj korbe)
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                setIsSuccess(true);
                setIsSending(false);
                form.current.reset();
                setTimeout(() => setIsSuccess(false), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                                Let's Build <br /> <span className="text-primary">Something Great.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">
                                I am available for  full-time opportunities. Reach out and let's chat!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: <FaEnvelope />, label: "Email", value: "jamaluddin.dev@gmail.com", link: "mailto:jamaluddin.dev@gmail.com" },
                                { icon: <FaPhone />, label: "Phone", value: "01610990018", link: "tel:01610990018" },
                                { icon: <FaWhatsapp />, label: "WhatsApp", value: "+880 1610 990018", link: "https://wa.me/8801610990018" },
                            ].map((item, i) => (
                                <motion.a
                                    whileHover={{ x: 10 }}
                                    href={item.link}
                                    key={i}
                                    className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group transition-all"
                                >
                                    <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaGithub />, link: "https://github.com/jamal-uddin-asif" },
                                { icon: <FaLinkedin />, link: "#" },
                                { icon: <FaFacebook />, link: "https://www.facebook.com/asifzehendmg" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    href={social.link}
                                    target="_blank"
                                    className="size-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 size-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
                        
                        <form 
                            ref={form} 
                            onSubmit={sendEmail}
                            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                                    <input type="text" name="user_name" required placeholder="Full name" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                    <input type="email" name="user_email" required placeholder="Your email address" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                                <input type="text" name="subject" required placeholder="Your subject" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea name="message" rows="5" required placeholder="Message" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white resize-none"></textarea>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                disabled={isSending}
                                className={`w-full py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${isSuccess ? 'bg-green-500 text-white' : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30'}`}
                            >
                                {isSending ? "Sending..." : isSuccess ? "Message Sent!" : <><FaPaperPlane /> Send Message</>}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}