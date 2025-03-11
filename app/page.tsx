"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Star,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Menu,
    Phone,
    X,
    Mail,
    MapIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Refs for parallax effect
    const heroRef = useRef<HTMLDivElement>(null);

    // Animation refs
    const [heroRef1, heroInView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [descRef, descInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [productsRef, productsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [customRef, customInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Parallax effect for hero section
            if (heroRef.current) {
                const scrollValue = window.scrollY;
                heroRef.current.style.transform = `translateY(${
                    scrollValue * 0.1
                }px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="font-poppins min-h-screen bg-black text-white overflow-hidden">
            {/* Background pattern with parallax effect */}
            <div className="fixed inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>

            {/* Animated gradient orb */}
            <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-primary/20 blur-[100px] animate-pulse-slow"></div>
            <div className="fixed bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-green/10 blur-[80px] animate-pulse-slow animation-delay-2000"></div>

            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "py-3 bg-black/80 backdrop-blur-md border-b border-gray-900/50"
                        : "py-6"
                }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Left - Logo */}
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ rotate: -20, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-purple-primary"
                        >
                            <Star className="h-5 w-5 fill-purple-primary" />
                        </motion.div>
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-medium"
                        >
                            Shashvata Labs
                        </motion.span>
                    </div>

                    {/* Center - Navigation Links */}
                    <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <Link
                                href="#"
                                className="hover:text-purple-primary transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <Link
                                href="#"
                                className="hover:text-purple-primary transition-colors duration-200"
                            >
                                Products
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <Link
                                href="#"
                                className="hover:text-purple-primary transition-colors duration-200"
                            >
                                About Us
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Right - Contact Button */}
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <button className="bg-purple-primary broder hover:bg-purple-secondary flex gap-2 items-center text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.5)] active:scale-95">
                            Contact
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-900/50"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                href="#"
                                className="py-2 hover:text-purple-primary transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="py-2 hover:text-purple-primary transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="py-2 hover:text-purple-primary transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <button className="bg-purple-primary hover:bg-purple-secondary text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.5)] active:scale-95">
                                Contact →
                            </button>
                        </div>
                    </motion.div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 md:pt-40 pb-32 overflow-hidden">
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-20 left-[20%]"
                    >
                        <Star className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-40 left-[10%]"
                    >
                        <Star className="h-8 w-8 text-white" />
                    </motion.div>
                </div>

                <div
                    className="container mx-auto px-4 text-center"
                    ref={heroRef1}
                >
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate={heroInView1 ? "visible" : "hidden"}
                        className="text-4xl font-normal md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight tracking-tight"
                    >
                        Empowering Businesses with{" "}
                        <span className="bg-gradient-to-r from-purple-primary via-purple-secondary to-[#44e760] text-transparent bg-clip-text animate-gradient">
                            Future-Proof Technology.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button
                            className={` mt-10 bg-[linear-gradient(80.72deg,#714DFF_0%,#9C83FF_31.28%,#E151FF_77.97%,#FFF759_95.64%)] text-white px-6 py-3 rounded-md  text-[20px] leading-[24px] tracking-[0%] transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] hover:scale-105 active:scale-95 font-semibold`}
                        >
                            Explore Our Products
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Company Description */}
            <section
                className="relative z-10 container mx-auto px-4 pb-32"
                ref={descRef}
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={descInView ? "visible" : "hidden"}
                    className="bg-[#101010] rounded-full py-3 px-8 max-w-max mx-auto mb-10 flex flex-col md:flex-row items-center gap-4 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] transition-all duration-300"
                >
                    {/* Gradient Text */}
                    <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#FFF759] bg-clip-text text-transparent font-bold text-lg">
                        shashvata labs
                    </span>

                    {/* Tagline with more spacing */}
                    <span className="text-gray-400 text-sm md:text-base">
                        Where Innovation Meets Timelessness
                    </span>
                </motion.div>

                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate={descInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-4"
                    >
                        Empowering businesses with cutting-edge SaaS solutions
                        that stand the test of time.
                    </motion.p>

                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate={descInView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400"
                    >
                        At Shashvata labs, we create innovative, scalable, and
                        future-ready digital products that redefine industries.
                    </motion.p>
                </div>
            </section>

            {/* Products Section */}
            <section
                className="relative z-10 container mx-auto px-4 pb-32"
                ref={productsRef}
            >
                <motion.h2
                    variants={fadeIn}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Our <span className="text-purple-primary">Products</span>
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)]"
                    >
                        <Image
                            src="/placeholder.svg?height=600&width=400"
                            alt="E-commerce app"
                            width={400}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)]"
                    >
                        <Image
                            src="/placeholder.svg?height=600&width=400"
                            alt="Entertainment app"
                            width={400}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)]"
                    >
                        <Image
                            src="/placeholder.svg?height=600&width=400"
                            alt="Social app"
                            width={400}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4"
                >
                    <Link
                        href="#"
                        className="text-purple-primary flex items-center gap-2 hover:underline group"
                    >
                        Browse thousands more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <div className="flex gap-2">
                        <button className="bg-[#191919] p-3 rounded-full hover:bg-[#252525] transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.3)] active:scale-95">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button className="bg-[#191919] p-3 rounded-full hover:bg-[#252525] transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.3)] active:scale-95">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Custom Product Section */}
            <section
                className="relative z-10 container mx-auto px-4 pb-32"
                ref={customRef}
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={customInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#0e0e0e] rounded-2xl p-6 md:p-10 overflow-hidden"
                >
                    <div>
                        <div className="text-sm text-center md:text-left mb-4 text-purple-primary font-medium tracking-wider">
                            WE BUILD IT FOR YOU
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                            Have a custom product idea?
                        </h2>
                        <button className="bg-purple-primary hover:bg-purple-secondary text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] hover:scale-105 active:scale-95 w-full md:w-auto">
                            Get in Touch
                        </button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={
                            customInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 50 }
                        }
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-primary to-[#44e760] rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Analytics dashboard"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-xl relative"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#191919] pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-purple-primary">
                                    <Star className="h-5 w-5 fill-purple-primary" />
                                </div>
                                <span className="font-medium">
                                    shashvata labs
                                </span>
                            </div>
                            <div className="flex text-center gap-4 mt-4">
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://x.com/shashvatalabs"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium mb-4">Company</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium mb-4">Resources</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Contact Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium mb-4">Legal</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>

                            <h3 className="font-medium mb-4 mt-8">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex gap-2 text-center items-center">
                                        <Mail className="h-5 w-5" />
                                        <Link href="shashvatalabs@gmail.com">
                                            shashvatalabs@gmail.com
                                        </Link>
                                    </div>
                                </li>
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex gap-2 text-center items-center">
                                        <Phone />
                                        +91 8310098901
                                    </div>
                                </li>
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex items-center text-center gap-2">
                                        <MapIcon />
                                        India
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-900">
                        © {new Date().getFullYear()} Shashvata Labs. All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
