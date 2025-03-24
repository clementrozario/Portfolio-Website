import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; 
import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; 

const LeftSection = () => {
    const [theme,setTheme] = useState("light");

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme){
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    },[]);

    const toggleTheme = () =>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);

        document.documentElement.classList.remove("light","dark");
        document.documentElement.classList.add(newTheme);
    };

    return (
        <div className="relative text-left space-y-8">  
        <div className="mt-50">
        <h1 className="text-4xl font-bold">Hello, I'm Clement</h1>
        <p className="text-lg leading-relaxed mt-4">
          Hello friend, this is Clement. I love beautiful design and I love to code.
          Generally curious, trying to become a professional software engineer, learning
          and building applications for fun. Find my projects and skills <span className="text-3xl">👉🏻</span>
        </p>
        </div>

        <div className="flex items-center justify-between mt-6">

        <div className="flex space-x-6">
          <a href="https://x.com/Clement35670821" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-blue-500" />
          </a>
          <a href="mailto:clementcla7@gmail.com?subject=Hello Clement!" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} className="hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/clementcla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/clementrozario" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-blue-500" />
          </a>
        </div>

        <button onClick={toggleTheme} className="p-2 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300" >
          {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
        </div>

        </div>
   );
};

export default LeftSection;