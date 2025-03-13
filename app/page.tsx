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
import graph from "@/app/graph.png";
import stars from "@/app/starss.svg";
import logo from "@/app/logo.svg";
import img1 from "@/app/img1.png";
import img2 from "@/app/img2.png";
import img3 from "@/app/img3.png";

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

            // Parallax effect for hero section - but only on non-mobile
            if (heroRef.current && window.innerWidth > 768) {
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

            {/* Animated gradient orb - make responsive */}
            <div className="fixed top-1/4 right-1/4 w-64 sm:w-72 md:w-96 lg:w-[500px] h-64 sm:h-72 md:h-96 lg:h-[500px] rounded-full bg-purple-primary/20 blur-[100px] animate-pulse-slow"></div>
            <div className="fixed bottom-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-[300px] h-32 sm:h-48 md:h-64 lg:h-[300px] rounded-full bg-accent-green/10 blur-[80px] animate-pulse-slow animation-delay-2000"></div>

            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "py-2 sm:py-3 bg-black/80 backdrop-blur-md border-b border-gray-900/50"
                        : "py-3 sm:py-4 md:py-6"
                }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Left - Logo */}
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ rotate: -20, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-purple-primary w-24 md:w-auto"
                        >
                            <Image
                                src={logo}
                                alt="Shashvata Labs"
                                draggable={false}
                            />
                        </motion.div>
                    </div>

                    {/* Center - Navigation Links */}
                    <nav className="hidden md:flex flex-1 justify-center items-center gap-4 lg:gap-8">
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
                                href="/coming-soon"
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
                        className="hidden sm:block"
                    >
                        <button className="bg-purple-primary broder hover:bg-purple-secondary flex gap-2 items-center text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.5)] active:scale-95">
                            Book a Demo
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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
                                href="/coming-soon"
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
                                Book a Demo →
                            </button>
                        </div>
                    </motion.div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-32 overflow-hidden">
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute top-20 left-[20%] hidden sm:block"
                    >
                        <Image src={stars} alt="Stars" width={50} height={50} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-40 left-[10%] hidden sm:block"
                    >
                        <Image src={stars} alt="Stars" width={50} height={50} />
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
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl max-w-5xl mx-auto leading-tight tracking-tight font-normal"
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
                        <Link href="/coming-soon">
                            <button
                                className={`mt-6 sm:mt-8 md:mt-10 bg-[linear-gradient(80.72deg,#714DFF_0%,#9C83FF_31.28%,#E151FF_77.97%,#FFF759_95.64%)] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base md:text-lg lg:text-xl leading-normal tracking-[0%] transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] hover:scale-105 active:scale-95 font-semibold`}
                            >
                                Explore Our Products
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Company Description */}
            <section
                className="relative z-10 container mx-auto px-4 pb-20 md:pb-32"
                ref={descRef}
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={descInView ? "visible" : "hidden"}
                    className="bg-[#101010] rounded-full py-2 px-4 sm:py-3 sm:px-6 md:px-8 max-w-max mx-auto mb-6 sm:mb-8 md:mb-10 flex flex-col md:flex-row items-center gap-2 sm:gap-4 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] transition-all duration-300"
                >
                    {/* Gradient Text */}
                    <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#FFF759] bg-clip-text text-transparent font-bold text-base sm:text-lg">
                        shashvata labs
                    </span>

                    {/* Tagline with more spacing */}
                    <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                        Where Innovation Meets Timelessness
                    </span>
                </motion.div>

                <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center">
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate={descInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4"
                    >
                        Empowering businesses with cutting-edge SaaS solutions
                        that stand the test of time.
                    </motion.p>

                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate={descInView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                        className="text-sm sm:text-base text-gray-400"
                    >
                        At Shashvata labs, we create innovative, scalable, and
                        future-ready digital products that redefine industries.
                    </motion.p>
                </div>
            </section>

            {/* Products Section */}
            <section
                className="relative z-10 container mx-auto px-4 pb-16 sm:pb-20 md:pb-32"
                ref={productsRef}
            >
                <motion.h2
                    variants={fadeIn}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
                >
                    Our <span className="text-purple-primary">Products</span>
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                >
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)]"
                    >
                        <Image
                            src={img1}
                            alt="E-commerce app"
                            width={442}
                            height={526}
                            quality={100}
                            className="w-full h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-[24px]"
                        />
                    </motion.div>
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)]"
                    >
                        <Image
                            src={img2}
                            alt="Entertainment app"
                            width={442}
                            height={526}
                            quality={100}
                            className="w-full h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-[24px]"
                        />
                    </motion.div>
                    <motion.div
                        variants={itemFade}
                        className="rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,130,255,0.2)] sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-md md:max-w-none"
                    >
                        <Image
                            src={img3}
                            alt="Social app"
                            width={442}
                            height={526}
                            quality={100}
                            className="w-full h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-[24px]"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={productsInView ? "visible" : "hidden"}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 md:mt-10 gap-4"
                >
                    <Link
                        href="/coming-soon"
                        className="text-purple-primary flex items-center gap-2 hover:underline group text-sm sm:text-base"
                    >
                        Browse thousands more
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <div className="flex gap-2">
                        <button className="bg-[#191919] p-2 sm:p-3 rounded-full hover:bg-[#252525] transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.3)] active:scale-95">
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="bg-[#191919] p-2 sm:p-3 rounded-full hover:bg-[#252525] transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,130,255,0.3)] active:scale-95">
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Custom Product Section */}
            <section
                className="relative z-10 container mx-auto px-4 pb-16 sm:pb-20 md:pb-32"
                ref={customRef}
            >
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate={customInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center bg-[#0e0e0e] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-10 overflow-hidden"
                >
                    <div className="text-center md:text-left">
                        <div className="text-xs sm:text-sm mb-2 sm:mb-4 text-purple-primary font-medium tracking-wider">
                            WE BUILD IT FOR YOU
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            Have a custom product idea?
                        </h2>
                        <button className="bg-purple-primary hover:bg-purple-secondary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,130,255,0.6)] hover:scale-105 active:scale-95 w-full md:w-auto text-sm sm:text-base">
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
                        className="relative mt-4 md:mt-0"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-primary to-[#44e760] rounded-lg sm:rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                        <Image
                            src={graph}
                            alt="Analytics dashboard"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg sm:rounded-xl relative"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#191919] pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-16">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                                <Image
                                    src={logo}
                                    alt="Shashvata Labs"
                                    draggable={false}
                                    className="w-24 sm:w-auto"
                                />
                            </div>
                            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 sm:h-5 sm:w-5"
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
                                        className="h-4 w-4 sm:h-5 sm:w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="text-center sm:text-left">
                            <h3 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                                Company
                            </h3>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
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
                                        href="/coming-soon"
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

                        <div className="text-center sm:text-left">
                            <h3 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                                Resources
                            </h3>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                                <li>
                                    <Link
                                        href="/coming-soon"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/coming-soon"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/coming-soon"
                                        className="hover:text-white transition-colors duration-200 hover:text-purple-primary"
                                    >
                                        Contact Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <h3 className="font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                                Legal
                            </h3>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
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

                            <h3 className="font-medium mb-3 sm:mb-4 mt-6 sm:mt-8 text-base sm:text-lg">
                                Contact
                            </h3>
                            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex gap-2 text-center items-center justify-center sm:justify-start">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                        <Link href="shashvatalabs@gmail.com">
                                            shashvatalabs@gmail.com
                                        </Link>
                                    </div>
                                </li>
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex gap-2 text-center items-center justify-center sm:justify-start">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                        +918310098901
                                    </div>
                                </li>
                                <li className="hover:text-purple-primary transition-colors duration-200">
                                    <div className="flex items-center text-center gap-2 justify-center sm:justify-start">
                                        <MapIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        India
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center text-xs sm:text-sm text-gray-500 pt-6 sm:pt-8 border-t border-gray-900">
                        © {new Date().getFullYear()} Shashvata Labs. All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
