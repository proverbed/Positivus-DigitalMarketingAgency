/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#191A23",
                secondary: "#B9FF66",
                neutral: "#F3F3F3",
            },
            width: {
                100: "25rem",
                110: "27.5rem",
                128: "32rem",
            },
            padding: {
                15: "3.75rem",
            },
        },
    },
    plugins: [],
};