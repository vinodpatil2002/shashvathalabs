"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Star, ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";
import stars from "@/app/starss.svg";
import logo from "@/app/logo.svg";
import Image from "next/image";

export default function ComingSoon() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log("Email submitted:", email);
        setIsSubmitted(true);
        setEmail("");

        // Reset the submitted state after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            {/* Background pattern with parallax effect */}
            <div className="fixed inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>

            {/* Animated gradient orb */}
            <div className="fixed top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-purple-primary/20 blur-[100px] animate-pulse-slow"></div>
            <div className="fixed bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-green/10 blur-[80px] animate-pulse-slow animation-delay-2000"></div>

            {/* Header */}
            <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Shashvata Labs" draggable={false} />
                </div>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-purple-primary hover:text-purple-secondary transition-colors duration-200"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Home</span>
                </Link>
            </header>

            {/* Coming Soon Content */}
            <section className="relative z-10 container mx-auto px-4 pt-20 md:pt-32 pb-32 flex flex-col items-center justify-center min-h-[70vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-20 left-[20%] hidden md:block"
                >
                    <Image src={stars} alt="Stars" draggable={false} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-40 right-[20%] hidden md:block"
                >
                    <Image src={stars} alt="Stars" draggable={false} />
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-3xl"
                >
                    <div className="inline-block bg-[#101010] rounded-full py-2 px-4 mb-6">
                        <span className="text-purple-primary text-sm font-medium">
                            LAUNCHING SOON
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Something
                        <span className="bg-gradient-to-r from-purple-primary via-purple-secondary to-[#44e760] text-transparent bg-clip-text animate-gradient">
                            {" "}
                            Amazing{" "}
                        </span>
                        is Coming
                    </h1>

                    <p className="text-xl text-gray-300 mb-10">
                        We're working on something exciting. Be the first to
                        know when we launch.
                    </p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
                    >
                        <div className="relative flex-grow">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-[#101010] border border-gray-800 rounded-md py-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary/50 focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-primary to-[#44e760] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] hover:scale-105 active:scale-95"
                        >
                            Notify Me
                        </button>
                    </motion.form>

                    {isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 text-accent-green"
                        >
                            Thanks! We'll notify you when we launch.
                        </motion.div>
                    )}
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#191919] py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="text-purple-primary">
                            <Star className="h-5 w-5 fill-purple-primary" />
                        </div>
                        <span className="font-medium">shashvata labs</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Shashvata Labs. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
