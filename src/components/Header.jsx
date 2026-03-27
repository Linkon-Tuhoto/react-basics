import { useState } from "react";  

function Header(){
    const [open, Setopen] = useState(false);
    const [theme, Settheme] = useState("light");
    const [show, Setshow] = useState(false);
    const [popup, setPopup] = useState(false);
    return(
        <div onClick={() => setPopup(!popup)}>
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

        <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/16 md:before:left-1/2 before:w-1 before:bg-gray-400 pl-20 pr-20">
            <div className="flex justify-start md:justify-start mb-8">
                <div className="bg-gray-400 block absolute top-1/12 right-[53.75%] md:right-1/2 w-1 h-1 pl-[40%] "></div>
                <div className="rounded-3xl bg-amber-200 p-35 hover:bg-amber-400 hover:scale-105 transition-all z-0" >
                    <h1>Feature 1</h1>
                    <button onClick={() => setPopup(!popup)} className="bg-green-500 text-white px-5 py-2 rounded">Read More</button>
                    </div>
                <div className="bg-blue-500 circle absolute top-1/12 right-1/2 w-4 h-4 rounded-full transform translate-x-1/2"></div>
                {popup && (
                    <div onClick={() => setPopup(!popup)} className="fixed h-8/12 w-11/12 inset-0 bg-white/40 backdrop-blur-md p-30 z-1000 space-y-50 text-center mt-0">
                        <div onClick={(e) => e.stopPropagation() } className="bg-white rounded-lg">
                        <div className="ml-[130%] sm:ml-[100%]">
                        <button onClick={() => setPopup(!popup)} className="cursor-pointer">X</button>
                        </div>
                        <div>
                        <h2>Web development</h2>
                        <p>I build responsive websites using React and Tailwind</p>
                        </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-start md:justify-end mb-8">
                <div className="bg-gray-400 block absolute top-1/4 right-[53.75%] md:left-1/2 w-1 h-1 pr-[40%]"></div>
                <div className="rounded-3xl bg-amber-200 p-40 hover:bg-amber-400 hover:scale-105 transition-all z-20">Feature 2</div>
            </div>
            <div className="flex justify-start md:justify-start mb-8">
                <div className="bg-gray-400 block absolute top-5/12 right-[53.75%] md:right-1/2 w-1 h-1 pr-[40%]"></div>
                <div className="rounded-3xl bg-amber-200 p-40 hover:bg-amber-400 hover:scale-105 transition-all z-20">Feature 3</div>
            </div>
            <div className="flex justify-start md:justify-end mb-8">
                <div className="bg-gray-400 block absolute top-7/12 right-[53.75%] md:left-1/2 w-1 h-1 pr-[40%]"></div>
                <div className="rounded-3xl bg-amber-200 p-40 hover:bg-amber-400 hover:scale-105 transition-all z-20">Feature 4</div>
            </div>
            <div className="flex justify-start md:justify-start mb-8">
                <div className="bg-gray-400 block absolute top-3/4 right-[53.75%] md:right-1/2 w-1 h-1 pr-[40%]"></div>
                <div className="rounded-3xl bg-amber-200 p-40 hover:bg-amber-400 hover:scale-105 transition-all z-20">Feature 5</div>
            </div>
            <div className="flex justify-start md:justify-end mb-8">
                <div className="bg-gray-400 block absolute top-11/12 right-[53.75%] md:left-1/2 w-1 h-1 pr-[40%]"></div>
                <div className="rounded-3xl bg-amber-200 p-40 hover:bg-amber-400 hover:scale-105 transition-all z-20">Feature 6</div>
            </div>
        </div>

        {/*About Me*/}
        </div>
        </div>
    );
}

export default Header