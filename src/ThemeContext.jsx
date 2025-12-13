// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.body.setAttribute("data-theme", storedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const next = theme === "light" ? "dark" : "light";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//     document.body.setAttribute("data-theme", next);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleGlobalTheme = () => {
    setGlobalTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", globalTheme);
    localStorage.setItem("theme", globalTheme);
  }, [globalTheme]);

  return (
    <ThemeContext.Provider value={{ globalTheme, toggleGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
