import React from "react";

interface themeContextProps {
    theme: string;
    toggleTheme: ()=>void;
}

const defaulTheme = {
    theme: "", 
    toggleTheme: () => null
}
export const themeContext = React.createContext<themeContextProps>(defaulTheme)


