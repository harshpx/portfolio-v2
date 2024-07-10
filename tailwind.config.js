import scrollbarPlugin from "tailwind-scrollbar";
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            aspectRatio: {
                "16/9": "16 / 9",
                "14/9": "14 / 9",
                "20/9": "20 / 9",
            },
        },
    },
    plugins: [
        scrollbarPlugin({
            nocompatible: true,
            preferredStrategy: "pseudoelements",
        }),
    ],
};
