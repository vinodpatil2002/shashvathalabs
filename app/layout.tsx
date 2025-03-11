import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
