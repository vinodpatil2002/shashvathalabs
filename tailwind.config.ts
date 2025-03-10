import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)", "sans-serif"], // Use Poppins globally
                mono: ["var(--font-geist-mono)"],
                archivo: ["var(--font-archivo)", "sans-serif"], // Add Archivo
                poppins: ["var(--font-poppins)", "sans-serif"], // Add Poppins
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                black: "#000000",
                white: "#ffffff",
                "purple-primary": "#9382ff",
                "purple-secondary": "#a594fd",
                "purple-light": "#f4f0ff",
                "purple-muted": "#928dd3",
                "gray-100": "#cccccc",
                "gray-200": "#c4c4c4",
                "gray-300": "#838383",
                "gray-400": "#6a6b6c",
                "gray-500": "#525252",
                "gray-900": "#191919",
                "gray-950": "#151515",
                "dark-1": "#0e0e0e",
                "dark-2": "#101010",
                "dark-3": "#1f1f1f",
                "dark-4": "#1e1e1e",
                "accent-green": "#44e760",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
