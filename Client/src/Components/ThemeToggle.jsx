import { useEffect, useState } from "react";

const ThemeToggle = ()=>{
    const[theme , setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        if(theme ==="dark"){
            document.documentElement.classList.add("dark");

        }else{
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={() =>setTheme(theme==="light" ? "dark" :"light")}
        className="p-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
             {theme === "dark" ? "🌙  " : "☀ "}


        </button>
    );
};
export default ThemeToggle;