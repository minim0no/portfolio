/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                beige: "#ffffe3",
                darkGray: "#3e3e3e",
                main: "#0e100f",
            },
        },
    },
    plugins: [],
};
