import { useState } from "react";  

function Header(){
    const [open, Setopen] = useState(false);
    const [theme, Settheme] = useState("light");
    const [show, Setshow] = useState(false);
    return(
        <div className="theme">
            {/*Navbar*/}
        <div className="flex justify-between items-center text-amber-800 dark:bg-amber-800 dark:text-white p-5">
            <div>
                <h1>Logo</h1>
            </div>

            {/* Desktop Nav */}
        <div className="hidden sm:flex gap-5">
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact Us</span>
        </div>
         <button className="cursor-pointer" onClick={() => Settheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "☀️" : "🌙"}
            </button>
        <button className="sm:hidden text-8xl cursor-pointer" onClick={() => Setopen(!open)}>=</button>
        </div>
        {/*Mobile Nav*/}
        {open && (
        <div className="md:hidden grid grid-cols-1 bg-blue-500 z-50 text-right p-5">
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact Us</span>
        </div>)}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 text-center font-semibold text-2xl sm:text-lg dark:bg-pink-600 dark:text-white">
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all" >Feature 1</div>
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all">Feature 2</div>
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all">Feature 3</div>
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all">Feature 4</div>
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all">Feature 5</div>
            <div className="rounded-3xl bg-amber-200 p-4 hover:bg-amber-400 hover:scale-105 transition-all">Feature 6</div>
        </div>

        {/*About Me*/}
        <div>
            <p>
                Hi, I Am Linkon Tuhoto 
                {}
            </p>
        </div>
        </div>
    );
}

export default Header