import { useState,useEffect } from "react";
import { FiSun,FiMoon } from "react-icons/fi";

const LeftSection = () => {
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme){
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    },[]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);

        document.documentElement.classList.remove("light","dark");
        document.documentElement.classList.add(newTheme);
    }

    return(
        <div>
            <button>{theme==="light"? <FiMoon size={24} /> : <FiSun size={24} />}
            </button>

            <h1>Hey, I'm Clement</h1>
            <p>Trying to build cool stuff</p>
        </div>
    );
};
export default LeftSection;