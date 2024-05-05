import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Light from "../../assets/Product/LightMode.png";
import Dark from "../../assets/Product/DarkMode.png";
export default function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative">
        <img 
          src={Light}
          alt="LightMode"
          className={`size-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
              theme==='dark'?'opacity-0 hidden':'opacity-100'
          }`}
          onClick={()=>setTheme(theme==='light'?'dark':'light')}
        />
        <img 
            src={Dark}
            alt="DarkMode"
            onClick={()=>setTheme(theme==='dark'?'light':'dark')}
            className={`size-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
            `}    
        />
      </div>
    </>
  );
}
