import type React from "react";
import type { Metadata } from "next";
import { Poppins, Archivo } from "next/font/google";
import "./globals.css";

// Define Archivo font
const archivo = Archivo({
    subsets: ["latin"],
    weight: ["600"], // Only 600 weight needed
    variable: "--font-archivo", // Use CSS variable for Tailwind
});

// Define Poppins font
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins", // Use CSS variable
});

export const metadata: Metadata = {
    title: "Shashvata Labs - Future-Proof Technology",
    description:
        "Empowering businesses with cutting-edge SaaS solutions that stand the test of time.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${poppins.variable} ${archivo.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
