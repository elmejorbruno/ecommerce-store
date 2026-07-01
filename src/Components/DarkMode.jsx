import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6"

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") 
        ? localStorage.getItem("theme") 
        : "light");

    
    // El useEffect tiene dos tareas: Agregar o quitar la clase dark al <html>.
        
        React.useEffect(() => {
        const element = document.documentElement; //html element
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

  return (
    <div className="relative"
          onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
    {  theme === "light" ? (
     <FaMoon 
       className="w-6 h-6 transition-all duration-300" 
       />
    ) : (
        <FaSun 
        className="w-6 h-6 transition-all duration-300" />
    )
    }        
    </div>
  )
}

export default DarkMode